'use strict'

const Products = require('../models/products')

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll()

    if (products.length == 0) {
      return res.status(204).json({
        status: 'success',
        code: 204,
        message: 'product is still empty'
      })
    }
    
    res.status(200).json(products)
  }
  catch(err) {
    console.log(err)
  }
}