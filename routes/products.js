'use strict'

const router = require('express').Router()
const { 
  getProducts, postProducts, deleteProducts 
} = require('../controllers/products')

router.get('/products', getProducts)
router.post('/products', postProducts)
router.delete('/products/:id', deleteProducts)

module.exports = router