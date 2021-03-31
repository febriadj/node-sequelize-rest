'use strict'

const 
  { Sequelize } = require('sequelize'),
  { DataTypes } = Sequelize,
  conn = require('../database/database')

const Products = conn.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  seller: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT('long')
  },
  item: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
    allowNull: false
  },
  price: {
    type: DataTypes.BIGINT,
    defaultValue: 0.000,
    allowNull: false
  },
  like: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dislike: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'products',
  timestamps: true
})

conn.sync({ force: true })

module.exports = Products