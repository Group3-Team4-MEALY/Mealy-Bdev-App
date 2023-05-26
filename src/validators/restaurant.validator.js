import Joi from "joi";

export const createRestaurantValidator = loi.object({
  customer: Joi.objectId().required(),
  customerId: Joi.objectId().required(),
  name: Joi.string().required(),

}).strict()