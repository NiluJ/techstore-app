const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');
const productsPath = path.join(__dirname, '../data/products.json');

const getCart = (req, res) => {
  console.log('Cart requested');

  fs.readFile(cartPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read cart' });
    }
    res.json(JSON.parse(data));
  });
};

const getCartTotal = (req, res) => {
  console.log('Cart total requested');

  fs.readFile(cartPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read cart' });
    }

    const cart = JSON.parse(data);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    console.log(`Updated total: $${total.toFixed(2)}`);
    res.json({ total: total.toFixed(2) });
  });
};

const addToCart = (req, res) => {
  const { productId } = req.body;

  fs.readFile(productsPath, 'utf8', (err, productsData) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read products' });
    }

    const products = JSON.parse(productsData);
    const product = products.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    fs.readFile(cartPath, 'utf8', (err, cartData) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read cart' });
      }

      let cart = JSON.parse(cartData);
      const existingItem = cart.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 1
        });
      }

      fs.writeFile(cartPath, JSON.stringify(cart, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to update cart' });
        }

        console.log(`Product added: ${product.name}`);

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        console.log(`Updated total: $${total.toFixed(2)}`);

        res.json({ message: 'Product added to cart', cart });
      });
    });
  });
};

const removeFromCart = (req, res) => {
  const { productId } = req.body;

  fs.readFile(cartPath, 'utf8', (err, cartData) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read cart' });
    }

    let cart = JSON.parse(cartData);
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }

    const productName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);

    fs.writeFile(cartPath, JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to update cart' });
      }

      console.log(`Product removed: ${productName}`);

      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      console.log(`Updated total: $${total.toFixed(2)}`);

      res.json({ message: 'Product removed from cart', cart });
    });
  });
};

module.exports = {
  getCart,
  getCartTotal,
  addToCart,
  removeFromCart
};
