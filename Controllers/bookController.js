


const mongoose = require("mongoose")

const { BookModels } = require("../Model/BookModels");

const getAllBooks = async (req, res, next) => {

    let books;

    try {
        books = await BookModels.find()
    } catch (error) {
        console.log(error)
    }

    if (!books) {
        return res.status(404).json({ message: "books not found" })
    }

    return res.status(200).json({ books })
}

const createBook = async (req, res, next) => {
    const { title
        , author
        , genre,
        publicationYear,
    } = req.body

    let book;

    try {
        const bookProduct = new BookModels({
            title
            , author
            , genre,
            publicationYear
        })

        book = await bookProduct.save()

    } catch (error) {
        return console.log(error)
    }
    if (!book) {
        return res.status(200).json({ msg: "unable to add it" })
    }

    return res.status(200).json({ book })

}
const updateBook = async (req, res, next) => {
    const { title
        , author
        , genre,
        publicationYear } = req.body

    const id = req.params.id
    // console.log(id)
    let book;

    try {
        book = await BookModels.findByIdAndUpdate(id, {
            title
            , author
            , genre,
            publicationYear
        })
    } catch (error) {
        return console.log(error)
    }

    if (!book) {
        return res.status(404).json({ message: "unable to update it" })
    }


    return res.status(200).json({ book })

}



const BookById = async (req, res, next) => {

    const id = req.params.id
    let book;

    try {
        book = await BookModels.findById(id)
    } catch (error) {
        return console.log(error)
    }

    if (!book) {
        return res.status(500).json({ message: "no book" })
    }

    return res.status(200).json({ book })

}

const deleteBook = async (req, res, next) => {

    const { id } = req.body

    let book;

    try {
        book = await BookModels.findByIdAndRemove(id)

    } catch (error) {
        return console.log(error)
    }

    if (!book) {
        return res.status(500).json({ message: "unable to delete it" })
    }

    return res.status(200).json({ message: " deleted" })

}


const searchBooks = async (req, res, next) => {


    const { genre, title, author } = req.body

    // console.log(genre)

    let books;

    try {
        books = await BookModels.find({

            genre: { $regex: ".*" + genre + ".*", $options: 'i' },
            title: { $regex: ".*" + title + ".*", $options: 'i' },
            author: { $regex: ".*" + author + ".*", $options: 'i' },

        })

    } catch (error) {
        console.log(error)
    }

console.log(books)

    if (!books) {
        return res.status(404).json({ message: "books not found" })
    }

    return res.status(202).json({ books })

}

module.exports = { getAllBooks, createBook, updateBook, BookById, deleteBook, searchBooks }
