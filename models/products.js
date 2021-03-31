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
  location: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  like: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dislike: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  }
})

module.exports = Products