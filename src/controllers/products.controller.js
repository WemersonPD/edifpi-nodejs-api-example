const { Router } =  require('express');

const ProductService = require('../services/products.service');

const routes = Router();
const productService = new ProductService()

routes.get('/', async (req, res) => {
  try {
    const response = await productService.listAll();

    return res.status(200).json(response);
  } catch(error) {
    return res.status(400).json('Erro ao salvar o produto');
  }
});

routes.get('/:productId', async (req, res) => {
  const { params } = req;
  const { productId } = params;
  
  try {
    const response = await productService.getById(productId);

    return res.status(200).json(response);
  } catch(error) {
    return res.status(400).json('Erro ao salvar o produto');
  }
});

routes.post('/', async (req, res) => {
  const { body } = req;

  try {
    await productService.create(body);
    
    return res.status(201).json('Sucesso ao salvar o produto');
  } catch(error) {
    return res.status(400).json('Erro ao salvar o produto');
  }

});

routes.put('/:productId', async (req, res) => {
  const { body, params } = req;
  const { productId } = params;

  try {
    await productService.update(productId, body);
  
    return res.status(201).json("Produto atualizado com succeso!");

  } catch(error) {
    return res.status(400).json(error.message);
  }
});

routes.delete('/:productId', async (req, res) => {
  const { params } = req;
  const { productId } = params;

  try {
    await productService.deleteById(productId)
  
    return res.status(201).json('Produto deletado com sucesso');

  } catch(error) {
    return res.status(400).json(error.message);
  }
});

module.exports = routes;