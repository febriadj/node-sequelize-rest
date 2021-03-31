'use strict'

const router = require('express').Router()
const { 
  getProducts, postProducts, deleteProducts, updateProducts 
} = require('../controllers/products')

router.get('/products', getProducts)
router.post('/products', postProducts)
router.delete('/products/:id', deleteProducts)
router.put('/products/:id', updateProducts)

module.exports = router