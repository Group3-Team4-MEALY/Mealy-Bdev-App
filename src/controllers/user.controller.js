import User from "../model/user.model.js"
import { signUpUserValidator, loginUserValidator } from "../validators/user.validator.js"
import { mongoIdValidator } from "../validators/mongoId.validator.js"
import { BadUserRequestError, NotFoundError } from "../error/error.js"
import {generateToken} from "../utils/jwt.js"
import bcrypt from "bcrypt"
import {config} from "../config/index.js"
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport';
import sendEmail from "../utils/mail.handler.js"
import jwt from "jsonwebtoken"


export default class UserController {

  static async signUpUser(req, res) {
    const { error, value } = signUpUserValidator.validate(req.body)
    if (error) throw error
    const emailExists = await User.find({ email: req.body.email })
    if (emailExists.length > 0) throw new BadUserRequestError("An account with this email already exists.")
    const saltRounds = config.bycrypt_salt_round
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
    
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    }

    const newUser = await User.create(user)
    res.status(200).json({
      message: "User created successfully",
      status: "Success",
      data: {
        user: newUser,
        access_token: generateToken(newUser)
      }
    })
  }



  static async findUser(req, res,) {
    const { id } = req.query
    const { error } = mongoIdValidator.validate(req.query)
    if (error) throw new BadUserRequestError("Please pass in a valid mongoId")
   
    const user = await User.findById(id)
    if (!user) throw new NotFoundError('User not found')

    res.status(200).json({
      message: "User found successfully",
      status: "Success",
      data: {
        user
      }
    })
  }
  
  static async loginUser(req, res) {
    const { error } = loginUserValidator.validate(req.body)
    if (error) throw error
    if (!req.body?.password && !req.body?.email) throw new BadUserRequestError("Please provide your email before you can login.")
    const user = await User.findOne({email: req.body?.email})
    if(!user) throw new BadUserRequestError("email does not exist")
    const hash = bcrypt.compareSync(req.body.password, user.password)
    if(!hash) throw new BadUserRequestError("Your email or password is wrong!")
   
    const access_token = generateToken(user)
     res.cookie('jwt', access_token, {httpOnly: true,  expiresIn: 60 * 60 * 24 * 1000 })
     res.status(200).json({
      message: "You're logged in successfully",
      status: "Success",
      data: {
        user,
        access_token
      }
    }) 
  }

  

}