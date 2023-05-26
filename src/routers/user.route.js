import express from 'express';
import UserController from '../controllers/user.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'


const router = new express.Router()

router.post("/register", tryCatchHandler( UserController.signUpUser) )

router.get("/logout", tryCatchHandler( UserController.logoutUser) )

router.get("/", tryCatchHandler( UserController.findUser) )

router.get('/:id', tryCatchHandler( UserController.findUser) )

router.put('/:id', tryCatchHandler( UserController.findUser) )

router.delete('/:id', tryCatchHandler( UserController.deleteOneUser) )

router.post("/login", tryCatchHandler( UserController.loginUser) )




//router.post("/send-mail", tryCatchHandler( UserController.sendMai) )



export { router }