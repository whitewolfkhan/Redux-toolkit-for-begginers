//create basic express server
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")  //mongoose is ORM(object relation model)
const morgan = require("morgan")
const dotenv = require("dotenv")
const postRoutes = require("./routes/PostRoutes")

dotenv.config()

const PORT = process.env.PORT || 3000

//create an instance of the express
const app = express()

//define our middlewares
app.use(cors())
app.use(express.json()) 

//it give us more detailed view on which route was hit
app.use(morgan("dev"))


//connnect to DB
mongoose.connect(process.env.MONGODB).then(() =>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log("Error connecting to DB", err)
})

//add routes
app.use("/api/posts", postRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})