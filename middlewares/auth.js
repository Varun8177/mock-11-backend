const jwt = require("jsonwebtoken")

const checkIsAdmin = (req, res, next) => {
    const token = req.headers.auth;
    if (token) {
        jwt.verify(token, "zoro", (err, decoded) => {
            if (err) {
                res.status(400).send({
                    message: "Authorization failed!!"
                })
            } else {
                if (decoded.isAdmin) {
                    next()
                } else {
                    res.status(400).send({
                        message: "Authorization failed!!"
                    })
                }
            }
        })
    } else {
        res.status(400).send({
            message: "Please provide token to proceed"
        })
    }
}

module.exports = checkIsAdmin