const Product = require("../modals/product");
const { readDBFile, writeDBFile } = require("../utils/helpers");

exports.getIndex = (req, res) => {
  res.render("index", { path: "/", css: {} });
};

exports.getProductsPage = async (req, res) => {
  const products = await Product.fetchAll();
  res.render("products", { path: "/products", css: {}, products });
};

exports.getAddProductPage = (req, res) => {
  res.render("add-product", { path: "/add-product", css: { formCSS: true } });
};

exports.postAddProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  const product = new Product(name, description, price, image);
  await product.save();
  res.redirect("/");
};
