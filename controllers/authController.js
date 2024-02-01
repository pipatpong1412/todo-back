const bcrypt = require('bcryptjs')
const prisma = require('../models/db')
const createError = require('../utils/createError')

exports.register = async (req, res, next) => {
    try {
        const { username, password, confirmPassword, email } = req.body

        if (!username && !password && !confirmPassword) {
            return createError(400, 'Fulfilll all inputs')
        }

        if (password !== confirmPassword) {
            return createError(400, 'confirm password not match')
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const data = {
            username,
            password: hashPassword,
            email
        }

        await prisma.user.create({ data: data })

        res.json({ message: 'Register Successfull' })

    } catch (error) {
        next(error)
    }
}

exports.login = (req, res, next) => {
    try {
        const { username, password } = req.body

        res.json({ username, password })

    } catch (error) {
        next(error)
    }
}