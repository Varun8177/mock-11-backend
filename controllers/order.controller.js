const BookModel = require("../models/book.model")
const OrderModel = require("../models/order.model")
const UserModel = require("../models/user.model")


const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find()
        res.status(200).send(orders)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

const PostOrder = async (req, res) => {
    const { userId, booksId, totalAmount } = req.body
    try {
        const user = await UserModel.findById({ _id: userId })
        if (user) {
            const books = []

            for (let i = 0; i < booksId.length; i++) {
                const book = await BookModel.findById({ _id: booksId[i] })
                books.push(book)
            }
            const data = new OrderModel({ user, books, totalAmount })
            await data.save()
            res.status(201).send({
                message: "Successfully placed Order"
            })
            res.send({ user, books, totalAmount })
        } else {
            res.status(400).send({
                message: "user is not registered"
            })
        }
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

module.exports = { getOrders, PostOrder }