const mongoose = require("mongoose")

const schemaBook = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,

    },
    publicationYear: {
        type: Number,
        required: true,
        minlength: 6
    }
  
})

const BookModels = mongoose.model("BookList", schemaBook)
module.exports = { BookModels }