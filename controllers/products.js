'use strict'

const Products = require('../models/products')

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll()

    if (products.length == 0) {
      res.status(204).json({
        status: 'success',
        code: 204,
        message: 'product is still empty'
      })

      return false
    }
    
    res.status(200).json(products)
  }
  catch(err) {
    console.log(err)
  }
}

exports.postProducts = async (req, res, next) => {
  try {
    const product = await Products.create(req.body)

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully added the product'
    })
  
    return product
  }
  catch(err) {
    console.log(err)
  }
}

exports.deleteProducts = async (req, res, next) => {
  try {
    const product = await Products.destroy({
      where: { id: req.params.id }
    })

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully deleted the product'
    })

    return product
  }
  catch(err) {
    console.log(err)
  }
}