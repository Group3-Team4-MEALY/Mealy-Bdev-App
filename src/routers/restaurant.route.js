import express from 'express';
import RestaurantController from '../controllers/user.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'

const router = new express.Router()

router.post("/create", tryCatchHandler( RestaurantController.createRestaurant) )

router.get("/", tryCatchHandler( RestaurantController.findRestaurant) )

router.get('/:id', tryCatchHandler( RestaurantController.findRestaurant) )

router.put('/:id', tryCatchHandler( RestaurantController.findRestaurant) )

router.delete('/:id', tryCatchHandler( RestaurantController.deleteOneRestaurant) )


export { router }