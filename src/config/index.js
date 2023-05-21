import dotenv from "dotenv"
dotenv.config()
import { development } from "./development.js";


const environment = process.env.NODE_ENV;

let config

console.log(`Server setup to ${environment}!!!`)

if(environment.trim() === "development") {
  config = {...development}
}

export { config }