const express = require('express');
const app = express();
const port = 3005;
const ip = '192.168.137.1';

app.get('/', (req, res) => {
  res.send('Hello World, this is my first server on express');
});

app.get('/home', (req, res) => {
  res.send('Bienvenidos a My Shop');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

app.get('/categories', (req, res) => {
  res.json({
    zapatos: ['zapatillas', 'tennis', 'sandalias'],
    bolsos: ['mochilas', 'bolsos', 'sandalias'],
    ropa: [
      { hombre: ['playeras', 'pantalones', 'chamarras', 'accesorios'] },
      {
        mujer: [
          'blusas',
          'playeras',
          'pantalones',
          'vestidos',
          'leggins',
          'chamarras',
          'accesorios',
        ],
      },
      { niños: ['playeras', 'pantalones', 'chamarras', 'accesorios'] },
      {
        niñas: [
          'blusas',
          'playeras',
          'vestidos',
          'suéteres',
          'pantalones',
          'chamarras',
          'accesorios',
        ],
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`http://${ip}:${port}/`);
});
