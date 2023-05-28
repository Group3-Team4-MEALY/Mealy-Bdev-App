import Joi from 'joi'


export const userSignUpValidator = Joi.object({
  userName: Joi.string().required(),
  userAddress: Joi.string().optional(),
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  .required()
  .messages({
    'string.pattern.base': 'Invalid email address',
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)
  .required()
  .messages({
    'string.pattern.base': 'You need one number, one alphanumeric character and one in caps, password be more than 7 characters long',
  }) 
}).strict()


export const userLoginValidator = Joi.object({
  email:Joi.string().required(),
  password: Joi.string().required()
}).strict()


export const userUpdateValidator = Joi.object({
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  .required()
  .messages({
    'string.pattern.base': 'Email not found',
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)
  .required()
  .messages({
    'string.pattern.base': 'Password not found',
  }) 
}).strict()

