import Joi from "joi"
import JoiMongoId from "joi-objectid"
const myJoiObjectId = JoiMongoId(Joi)


export const createNewItemValidator = Joi.object({
  picture: Joi.image().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number().required(),
  description: Joi.string().min(10).max(255),
  category: Joi.string().required,
  restaurant: Joi.string().required,
  ingredients: Joi.string().required,
  calories: Joi.string().required,
}).strict()


