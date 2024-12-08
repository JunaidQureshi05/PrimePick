const Product = require("../modals/product");
const { readDBFile, writeDBFile } = require("../utils/helpers");

exports.getIndex = (req, res) => {
  res.render("index", { path: "/", css: {} });
};

exports.getProductsPage = (req, res) => {
  res.render("products", { path: "/products", css: {} });
};

exports.getAddProductPage = (req, res) => {
  res.render("add-product", { path: "/add-product", css: { formCSS: true } });
};

exports.postAddProduct = async (req, res) => {
  console.log("inside controller");
  const products = await readDBFile();
  const { name, image, price, description } = req.body;
  console.log("$$$$$$$", req.body);
  const product = new Product(name, description, price, image);

  const newProducts = products.concat(product);

  console.log("i am here");
  writeDBFile(newProducts);
  res.redirect("/");
};
