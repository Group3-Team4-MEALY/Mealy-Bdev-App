import {Router} from "express"
import ItemController from "../controllers/item.controller.js"
import { tryCatchHandler } from "../utils/tryCatch.handler.js"
import {userAuthMiddleWare} from "../middleware/auth.js"

const router = Router()

router.post("/create", userAuthMiddleWare, tryCatchHandler( ItemController.createNewItem))

router.get("/menu", userAuthMiddleWare, tryCatchHandler( ItemController.getItemDetails))

router.get("/info", userAuthMiddleWare, tryCatchHandler( ItemController.getNutritionInfo))

router.get("/cart", userAuthMiddleWare, tryCatchHandler( ItemController.addItemToCart))

router.get("/favourites", userAuthMiddleWare, tryCatchHandler( ItemController.addItemToFavourites))

router.post("/review", userAuthMiddleWare, tryCatchHandler( ItemController.addReview))

router.get("/allreviews", userAuthMiddleWare, tryCatchHandler( ItemController.getAllReviews))

router.delete("/delete", userAuthMiddleWare, tryCatchHandler( ItemController.removeFromFavourites))


export {router}