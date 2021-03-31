'use strict'

const 
  express = require('express'),
  cors = require('cors'),
  dotenv = require('dotenv'),
  app = express(),
  port = process.env.PORT || 8080

// .env file
dotenv.config({ path: './.env' })

app.use(cors())

// express urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./routes/products'))

app.listen(port, (err) => {
  err ? console.log(err) : console.log('Server Running on Port:' + port)
})