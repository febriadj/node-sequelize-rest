'use strict'

const { Sequelize } = require('sequelize')
const fs = require('fs')

// product process
const productProses = process.env.PRODUCT_PROCESS

function productProcessFile() {
  try {
    const data = fs.readFileSync('config/product-process.json', 'utf-8')
    const json = JSON.parse(data)
  
    if (productProses == 'development') {
      return json.development
    }
  
    return json.production
  }
  catch(err) {
    console.log(err)
  }
}

(function createDatabase() {
  try {
    const product = productProcessFile()
    const conn = new Sequelize(product.database, product.user, product.password, {
      host: product.host,
      dialect: product.dialect
    })

    module.exports = conn
  }
  catch(err) {
    console.log(err)
  }
})()