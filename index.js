const express = require('express');
const casual = require('casual');
const app = express();
const port = 3005;
const ip = '192.168.137.1';

app.get('/', (req, res) => {
  res.send('Hello World, this is my first server on express');
});

app.get('/home', (req, res) => {
  res.send('Bienvenidos a My Shop');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product 2',
    price: 2000,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`http://${ip}:${port}/`);
});
