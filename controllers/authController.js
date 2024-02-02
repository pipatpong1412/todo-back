require('dotenv').config()
const bcrypt = require('bcryptjs')
const prisma = require('../models/db')
const jwt = require('jsonwebtoken')
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

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!(username.trim() && password.trim())) {
            return createError(400, 'Username or Password must not blank')
        }

        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })

        if (!user) {
            return createError(400, 'User not found')
        }
        const pwOK = await bcrypt.compare(password, user.password)
        if (!pwOK) {
            return createError(400, 'Usernamem or Password are invalid')
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: process.env.KEY_EXPIRES })
        // console.log(token)
        res.json({ token: token })

    } catch (error) {
        next(error)
    }
}

exports.getMe = async (req, res, next) => {
    try {
        res.json({ user: req.user })

    } catch (error) {
        next(error)
    }
}