const casual = require('casual');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    let format = '###';
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: casual.uuid,
        name: casual.city,
        price: parseInt(casual.numerify(format)),
        image:
          'https://www.gaiadesign.com.mx/media/catalog/product/cache/28cb47c806b746a91bc25b380c9673fa/m/a/maceta_mediana_xitle_negro_still1_v1.jpg',
      });
    }
  }

  create(data) {
    const newProduct = {
      id: casual.uuid,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product Not Found');
    }
    this.products[index] = changes;
    return this.products[index];
  }

  patch(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product Not Found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product Not Found');
    }
    this.products.splice(index, 1);
    return {
      message: `Product ${id} was deleted successfully!`,
    };
  }
}

module.exports = ProductsService;
