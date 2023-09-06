
const Express = require("express");
const { getAllBooks, createBook, updateBook, BookById, deleteBook, searchBooks } = require("../Controllers/bookController");

const BookRoute = Express.Router()

BookRoute.get('/', getAllBooks)
BookRoute.post('/add', createBook)
BookRoute.get('/search', searchBooks)
BookRoute.put('/update/:id', updateBook)

BookRoute.get('/:id', BookById)

BookRoute.delete('/delete', deleteBook)


module.exports = BookRoute
