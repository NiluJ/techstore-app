const express = require('express');
const router = express.Router();
const { getProducts, getCategories } = require('../controllers/productController');

router.get('/products', getProducts);
router.get('/categories', getCategories);

module.exports = router;
