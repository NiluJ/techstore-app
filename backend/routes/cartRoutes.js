const express = require('express');
const router = express.Router();
const { getCart, getCartTotal, addToCart, removeFromCart } = require('../controllers/cartController');

router.get('/cart', getCart);
router.get('/cart/total', getCartTotal);
router.post('/cart/add', addToCart);
router.post('/cart/remove', removeFromCart);

module.exports = router;
