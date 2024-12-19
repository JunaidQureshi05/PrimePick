const { writeDBFile, readDBFile } = require("../utils/helpers");
const db = require("../utils/db");
class Product {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  static async fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  async save() {
    return db.execute(
      "INSERT INTO products (name,description,price,image) VALUES (?,?,?,?)",
      [this.name, this.description, +this.price, this.image]
    );
  }
  static async findById(id) {
    return db.execute("SELECT * FROM products WHERE id=?", [id]);
  }
}

module.exports = Product;
