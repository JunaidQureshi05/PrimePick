const Product = require("../modals/product");
const { readDBFile, writeDBFile, formatIndianCurrency } = require("../utils/helpers");

exports.getIndex = (req, res) => {
  res.render("index", { path: "/", css: {} });
};

exports.getProductsPage = async (req, res) => {
  let  products = await Product.fetchAll();
     products = products.map(p=>({...p,price:formatIndianCurrency(+p.price)}))
  res.render("products", { path: "/products", css: {productCSS:true}, products });
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
