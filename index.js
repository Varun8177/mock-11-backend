const express = require("express")
const connection = require("./config/db")
const userRouter = require("./routes/user.route")
const booksRouter = require("./routes/book.route")
const orderRouter = require("./routes/order.route")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("home")
})

app.use("/users", userRouter)

app.use("/books", booksRouter)

app.use("/order", orderRouter)

app.listen(8080, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log("Running at 8080")
})
