'use strict'

const router = require('express').Router()
const { getProducts, postProducts } = require('../controllers/products')

router.get('/products', getProducts)
router.post('/products', postProducts)

module.exports = router