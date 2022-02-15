const express = require('express');
const casual = require('casual');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query; //queryparams
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: casual.uuid,
      name: casual.city,
      price: casual.integer((from = 1000), (to = 10000)),
      image:
        'https://www.gaiadesign.com.mx/media/catalog/product/cache/28cb47c806b746a91bc25b380c9673fa/m/a/maceta_mediana_xitle_negro_still1_v1.jpg',
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

module.exports = router;
