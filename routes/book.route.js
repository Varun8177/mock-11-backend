const express = require("express")
const BookModel = require("../models/book.model")
const { getSingleBook, getAllBooks, postBook, updateBook, replaceBook, deleteBook } = require("../controllers/book.controller")
const checkIsAdmin = require("../middlewares/auth")
const booksRouter = express.Router()

// get route
booksRouter.get("/", getAllBooks)

booksRouter.get("/:id", getSingleBook)

// post route
booksRouter.post("/", checkIsAdmin, postBook)

// patch route
booksRouter.patch("/:id", checkIsAdmin, updateBook)


// put route
booksRouter.put("/:id", checkIsAdmin, replaceBook)

// delete route
booksRouter.delete("/:id", checkIsAdmin, deleteBook)


module.exports = booksRouter