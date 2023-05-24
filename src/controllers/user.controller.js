import User from "../model/user.model.js"
import { createUserValidator } from "../validators/user.validator.js"
//import { mongoIdValidator } from "../validators/mongoId.validator.js"
import { BadUserRequestError, NotFoundError } from "../error/error.js"
//import {generateToken} from "../utils/jwt.utils.js"
import bcrypt from "bcrypt"
import {config} from "../config/index.js"


export default class UserController {

  static async createUser(req, res) {
    // Joi validation
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
  }
}