const express = require("express")
const checkIsAdmin = require("../middlewares/auth")
const { PostOrder, getOrders } = require("../controllers/order.controller")
const orderRouter = express.Router()


// get 
orderRouter.get("/", checkIsAdmin, getOrders)

orderRouter.post("/", PostOrder)


module.exports = orderRouter