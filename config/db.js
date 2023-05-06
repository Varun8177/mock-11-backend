const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect("mongodb+srv://varun:1234jklm@cluster0.ay3zbos.mongodb.net/mock-library?retryWrites=true&w=majority")

module.exports = connection
