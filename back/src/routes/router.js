const express = require('express')
const productsRouter = require('./productsRouter')
const router = express.Router()

router.use('/products', productsRouter)

module.exports = router