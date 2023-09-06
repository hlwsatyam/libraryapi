const Express = require("express");
const Cors = require("cors");
require("dotenv").config()
const Mongo = require("mongoose");

// const BookRoute = require("../Routing/BookRouting");
const BookRoute = require("../Routing/bookRouting.js");

const App = Express()

const port = process.env.PORT || 5000
// const port = 5000

App.use(Express.json())
App.use(Cors())

App.use('/book', BookRoute)

// Mongo.connect(process.env.Mongo_uri).then(() => {
Mongo.connect("mongodb+srv://satyamkumar:20172522@cluster0.xjscco4.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Mongodb is Connected!")
}).catch(() => {
    console.log("Mongodb is Not Connected 😓! ")
})

App.listen(5000, () => {
    console.log(`Server is running on Port ${port}`)
})