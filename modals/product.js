let products = [];

class Product {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  static fetchAll() {
    return products;
  }
  save() {
    products.push(this);
  }
}

module.exports = Product;
