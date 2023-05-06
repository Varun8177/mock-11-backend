const UserModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    const { name, email, password, isAdmin } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            res.status(400).send({
                message: "User already exist, please login"
            })
        } else {
            bcrypt.hash(password, 5, async (err, hash) => {
                const newUser = { name, email, password: hash, isAdmin }
                const user = new UserModel(newUser)
                await user.save()
                res.status(201).send({
                    message: "Successfully Registered a new user"
                })
            })
        }
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user._id, isAdmin: user.isAdmin }, "zoro")
                    res.status(201).send({
                        message: "Successfully Logged in!!",
                        token
                    })
                } else {
                    res.status(400).send({
                        message: "Wrong Password"
                    })
                }
            })
        }
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

module.exports = { login, register }