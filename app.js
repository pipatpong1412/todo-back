require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/error')
const app = express()
const port = process.env.PORT
const authRoute = require('./routes/authRoute')

app.use(express.json())
app.use(cors())

app.use('/auth', authRoute)
app.use('*', notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`THIS APP IS RUNNING ON PORT ${port}`))