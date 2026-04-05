const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');

const getProducts = (req, res) => {
  console.log('Products requested');

  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read products' });
    }
    res.json(JSON.parse(data));
  });
};

const getCategories = (req, res) => {
  console.log('Categories requested');

  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read products' });
    }

    const products = JSON.parse(data);
    const categories = [...new Set(products.map(product => product.category))];
    res.json(categories);
  });
};

module.exports = {
  getProducts,
  getCategories
};
