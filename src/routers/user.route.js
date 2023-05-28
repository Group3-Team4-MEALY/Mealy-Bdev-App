import express from 'express';
import UserController from '../controllers/user.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'

const router = new express.Router()

router.post("/signUp", tryCatchHandler( UserController.userSignUp) )

router.post("/login", tryCatchHandler( UserController.userLogin) )

router.patch('/:id', tryCatchHandler( UserController.userUpdate) )

router.post('/password-reset', tryCatchHandler( UserController.sendPassordLink) )

router.post('/password-reset/:userId/:token', tryCatchHandler( UserController.resetUserPassword) )

router.delete('/:id', tryCatchHandler( UserController.deleteOneUser) )


export { router }