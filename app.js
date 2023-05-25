import express  from "express";
import mongoose from "mongoose";
import morgan from "morgan"
import {config} from "./src/config/index.js"
import {globalErrorHandler} from "./src/utils/errorHandler.js"
import {router as userRouter} from "./src/routers/user.route.js"
import {router as restaurantRouter} from "./src/routers/restaurant.route.js"

const app = express()

mongoose.connect(config.mongodb_connection_url).then(()=> console.log("Database connection established")).catch(e=> console.log("Database connection error: ", e.message))

const port = config.port || 4000

app.use(morgan('tiny'))
app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/restaurant', restaurantRouter)

app.use(globalErrorHandler)

app.listen(port, () => console.log(`To the glory of God server running on ${port}`))