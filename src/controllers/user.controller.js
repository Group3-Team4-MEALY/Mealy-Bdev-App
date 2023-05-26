import User from "../model/user.model.js"
import { createUserValidator } from "../validators/user.validator.js"
import { mongoIdValidator } from "../validators/mongoId.validator.js"
import { BadUserRequestError, NotFoundError } from "../error/error.js"
import {generateToken} from "../utils/jwt.js"
import bcrypt from "bcrypt"
import {config} from "../config/index.js"
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport';
import sendEmail from "../utils/mail.handler.js"


export default class UserController {

  static async createUser(req, res) {
    const { error, value } = createUserValidator.validate(req.body)
    if (error) throw error
    const emailExists = await User.find({ email: req.body.email })
    if (emailExists.length > 0) throw new BadUserRequestError("An account with this email already exists.")
    const usernameExists = await User.find({ username: req.body.username })
    if (usernameExists.length > 0) throw new BadUserRequestError("An account with this username already exists.")
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
    await sendEmail(user.email, "Nodemailer", "My first Nodemailer")
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
  
  

}
