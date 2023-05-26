import {createNewItemValidator} from "../validators/item.validator.js"
import Item from "../model/item.model.js"
import User from "../model/user.model.js"
import { BadUserRequestError, NotFoundError, AccessDeniedError } from "../error/error.js"

export default class ItemController {
  
  static async createNewItem(req, res,){
    const { error } = createNewItemValidator.validate(req.body)
    if(error) throw error
    const newItem = await Item.create({...req.body, customer: req.user._id})
    res.status(201).json({
    message: "Item successfully created",
    status: "Success",
    data:{
      item: newItem
    }
  })
}

  static async getItemDetails(req, res,){

}
  static async getNutritionInfo(req, res,){

}
  static async addItemToCart(req, res,){

}
  static async addItemToFavourites(req, res,){

}
  static async addReview(req, res,){

}
  static async getAllReviews(req, res,){

}
  static async removeFromFavourites(req, res,){

}

}