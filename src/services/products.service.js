const ProductsRepository = require("../db/repository/products.repository");


class ProductService {
  productRepository = new ProductsRepository()
  
  async create(product) {
    try {
      await this.productRepository.create(product);
    } catch(error) {
      throw new Error(error);
    }
  }

  async update(productId, product) {
    try {
      return await this.productRepository.update(productId, product);
    } catch(error) {
      throw new Error(error);
    }
  }

  async listAll() {
    try {
      return await this.productRepository.listAll();
    } catch(error) {
      throw new Error(error);
    }
  }

  async getById(productId) {
    try {
      return await this.productRepository.getById(productId);
    } catch(error) {
      throw new Error(error);
    }
  }

  async deleteById(productId) {
    try {
      await this.productRepository.deleteById(productId);
    } catch(error) {
      throw new Error(error);
    }
  }
}

module.exports = ProductService;