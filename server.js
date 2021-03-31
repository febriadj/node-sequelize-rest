'use strict'

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const port = process.env.PORT || 8080

// .env file
dotenv.config({ path: './.env' })

app.use(cors())

// express urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/products', require('./routes/products'))

app.listen(port, (err) => {
  err ? console.log(err) : console.log('Server Running on Port:' + port)
})