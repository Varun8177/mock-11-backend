const BookModel = require("../models/book.model")



const getAllBooks = async (req, res) => {
    const query = req.query
    const categoryQuery = {}
    const authorQuery = {}
    if (query.category) {
        categoryQuery.category = query.category
    }
    if (query.author) {
        authorQuery.author = query.author
    }
    try {
        const books = await BookModel.find({ $and: [categoryQuery, authorQuery] })
        res.status(200).send(books)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

const getSingleBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await BookModel.findById({ _id: id })
        res.status(200).send(book)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

const postBook = async (req, res) => {
    try {
        const book = new BookModel(req.body)
        await book.save()
        res.status(201).send(book)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

const updateBook = async (req, res) => {
    const changes = req.body
    const id = req.params.id
    try {
        const book = await BookModel.findByIdAndUpdate({ _id: id }, changes)
        res.status(204).send(book)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

const replaceBook = async (req, res) => {
    const changes = req.body
    const id = req.params.id
    try {
        const book = await BookModel.findOneAndReplace({ _id: id }, changes)
        res.status(204).send(book)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await BookModel.findByIdAndDelete({ _id: id })
        res.status(202).send(book)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

module.exports = { getAllBooks, getSingleBook, postBook, updateBook, replaceBook, deleteBook }