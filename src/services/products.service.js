class ProductService {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2',
      price: 200
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Product 3',
      price: 300
    },
  ]
  
  create(product) {
    product.id = this.products.length + 1;
    
    this.products.push(product);
  }

  update(productId, product) {
    const currentProductIndex = this.products
      .findIndex((currentProduct) => currentProduct.id == productId);
    
    if(currentProductIndex == -1) {
      throw new Error('O produto não existe!');
    }

    this.products[currentProductIndex] = product;
  }

  listAll() {
    return this.products;
  }

  getById(productId) {
    const currentProduct = this.products
      .find((currentProduct) => currentProduct.id == productId);
  
    if(currentProduct == -1) {
      throw new Error('O produto não existe!');
    }

    return currentProduct;
  }

  deleteById(productId) {
    const currentProductIndex = this.products
      .findIndex((currentProduct) => currentProduct.id == productId);
    
    if(currentProductIndex == -1) {
      throw new Error('O produto não existe!');
    }

    this.products.splice(currentProductIndex, 1);
  }
}

module.exports = ProductService;