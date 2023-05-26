import {createRestaurantValidator, updateRestaurantValidator} from "../validators/Restaurant.validator.js"
import Restaurant from "../model/restaurant.model.js"
import User from "../model/user.model.js"
import { BadUserRequestError, NotFoundError } from "../error/error.js"
import { mongoIdValidator } from "../validators/mongoId.validator.js"

export default class RestaurantController {
  static async createRestaurant(req, res,){
      const {error } = createRestaurantValidator.validate(req.body)
      if(error) throw error
      const newRestaurant = await Restaurant.create({...req.body, customer: req.user._id, customerId: req.user._id })
      res.status(201).json({
      message: "Restaurant created successfully",
      status: "Success",
      data:{
        restaurant: newRestaurant
      }
    })
  }
}