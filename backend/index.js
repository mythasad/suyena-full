import express from "express"
import {PORT} from "./config.js"

const app = express()

app.listen(()=>{
    console.log(`App is listening to port ${PORT}`)
})

app.get('/',  (request, response)=>{
    console.log(request)
    return response.status(200).send('App is running')
})