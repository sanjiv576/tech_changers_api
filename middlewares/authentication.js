const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    let token = req.headers.authorization
    if (!token) return res.status(401).json({ error: 'Authentication token is not present!' })
    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if (err) return res.status(401).json({ error: err.message })
        req.user = payload
    })
    next()
}

const verifySupplier = (req, res, next) => {
    if (req.user.role !== 'supplier') {
        return res.status(403).json({ error: "Access only for supplier!" })
    } else if (req.user.role == 'supplier') {
        next()
    }
}



module.exports = { verifyUser, verifySupplier }