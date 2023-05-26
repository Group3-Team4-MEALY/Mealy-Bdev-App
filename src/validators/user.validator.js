import Joi from 'joi'

export const signUpUserValidator = Joi.object({
  firstName: Joi.string().required().min(3).max(255),
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  .required()
  .messages({
    'string.pattern.base': 'Invalid email address',
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)
  .required()
  .messages({
    'string.pattern.base': 'Your password must be at least 8 characters long, with a letter and a number',
  }),
 }).strict()


export const loginUserValidator = Joi.object({
  firstName:Joi.string().optional(),
  email:Joi.string().required(),
  password: Joi.string().required()
}).strict()
