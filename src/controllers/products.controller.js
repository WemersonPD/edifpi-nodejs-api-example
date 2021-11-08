const { Router } =  require('express');

const ProductService = require('../services/products.service');

const routes = Router();
const productService = new ProductService()

routes.get('/', (req, res) => {
  const response = productService.listAll();

  return res.status(200).json(response);
});

routes.post('/', (req, res) => {
  const { body } = req;

  productService.create(body);

  return res.status(201).json('Sucesso ao salvar o produto')
});

routes.put('/:productId', (req, res) => {
  const { body, params } = req;
  const { productId } = params;

  try {
    const response = productService.update(productId, body);
  
    return res.status(201).json(response);

  } catch(error) {
    return res.status(400).json(error.message);
  }
});

routes.delete('/:productId', (req, res) => {
  const { params } = req;
  const { productId } = params;

  try {
    productService.deleteById(productId)
  
    return res.status(201).json('Produto deletado com sucesso');

  } catch(error) {
    return res.status(400).json(error.message);
  }
});

module.exports = routes;