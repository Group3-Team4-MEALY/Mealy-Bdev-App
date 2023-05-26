import express from 'express';
import UserController from '../controllers/user.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'

const router = new express.Router()

router.post("/create", tryCatchHandler( UserController.createUser) )

router.get("/", tryCatchHandler( UserController.findUser) )

router.get('/:id', tryCatchHandler( UserController.findUser) )

router.put('/:id', tryCatchHandler( UserController.findUser) )

router.delete('/:id', tryCatchHandler( UserController.deleteOneUser) )

router.post("/login", tryCatchHandler( UserController.loginUser) )


export { router }