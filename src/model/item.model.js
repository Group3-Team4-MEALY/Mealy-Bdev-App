import { Schema, model, Types } from "mongoose"


const ItemSchema = new Schema({
  customer: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  details:{
      picture: {
        type: Image,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: number,
        required: true,
        max:4
      },
      rating: {
        type: number,
        required: true
      },
      description: {
        type: String,
        required: true,
        min:10,
        max:255,
      },
      category: {
        type: String,
        required: true
      },
      restaurant: {
        type: String,
        required: true
      },
  },
  nutrition_info: {
      ingredients: {
        type: String,
        required: true
      },
      calories: {
        type: String,
        required: true
      },
 },
 review: {
      customer_name: {
        type: String,
        ref: "User",
        required: true,
      },
      customer_rating: {
        type: String,
        ref: "User",
        required: true,
      },
      statement: {
        type: String,
        ref: "User",
        required: true,
      },
      dateReviewed: {
        type: Date,
        ref: "User",
        default: Date.now
      },
  },
 
  }) 

export default model('Item', ItemSchema)