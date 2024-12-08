const { writeDBFile, readDBFile } = require("../utils/helpers");

class Product {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  static async fetchAll() {
    const products = await readDBFile();
    return products;
  }
  async save() {
    const products = await readDBFile();
    const newProducts = products.concat(this);
    let res = await writeDBFile(newProducts);
    return res;
  }
}

module.exports = Product;
