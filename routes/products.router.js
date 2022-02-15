const express = require('express');
const ProductsService = require('../services/product.service');
const router = express.Router();

const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.put('/:id', async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const product = await service.update(id, body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const product = await service.patch(id, body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
