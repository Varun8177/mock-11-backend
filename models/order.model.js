const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    user: {},
    books: [],
    totalAmount: Number
})

const OrderModel = mongoose.model("order", orderSchema)

module.exports = OrderModel