import joi from "joi";

export const createUserValidator = joi.object({
  username: Joi.string().required(),
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  .required()
  .messages({
    'string.pattern.base': 'Invalid email address',
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)
  .required()
  .messages({
    'string.pattern.base': 'You need one number, one alphanumeric character and one in caps, password be more than 7 characters long',
  }),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
}).strict()