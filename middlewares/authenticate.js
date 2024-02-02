const createError = require('../utils/createError')
const jwt = require('jsonwebtoken')
const prisma = require('../models/db')

authenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) {
            return createError(400, 'Unauthorized')
        }

        const arrayToken = authorization.split(' ')
        // console.log(arrayToken[1])
        if (arrayToken[0] !== 'Bearer') {
            return createError(400, 'Unauthorized')
        }

        const payload = jwt.verify(arrayToken[1], process.env.SECRET_KEY)

        const user = await prisma.user.findFirst({
            where: {
                id: payload.id
            }
        })

        if (!user) {
            return createError(400, 'User not found')
        }

        delete user.password
        req.user = user

        next()
    } catch (error) {
        next()
    }

}

module.exports = authenticate