import express  from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import {globalErrorHandler} from "./src/utils/errorHandler.js"
import { config } from "./src/config/index.js";
import {router as userRouter} from "./src/routers/user.route.js"
import {router as restaurantRouter} from "./src/routers/restaurant.route.js"

<<<<<<< HEAD


||||||| 81d3090
=======

>>>>>>> 6e1c70ebde6ad91cadf859b0a4af9148c0af53fd
const app = express()

 mongoose.connect(config.mongodb_connection_url).then(()=> console.log("Database connection established")).catch(e=> console.log("Mongo connection error: ", e.message))


const port = config.port || 4000;

app.use(morgan('tiny'))
app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/restaurant', restaurantRouter)


app.use(globalErrorHandler)

app.listen(port, ()=>{
  console.log(`To the glory of God server runnning on port: ${port}`)
})