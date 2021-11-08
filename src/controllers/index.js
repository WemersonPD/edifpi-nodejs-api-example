const { Router } = require('express');

const router = Router();

const productsController = require('./products.controller')

router.use('/products', productsController);

module.exports = router;
