const Product = require("../modals/product");
const {
  readDBFile,
  writeDBFile,
  formatIndianCurrency,
} = require("../utils/helpers");

exports.getIndex = (req, res) => {
  res.render("index", { path: "/", css: {} });
};

exports.getProductsPage = async (req, res) => {
  Product.fetchAll()
    .then(([products]) => {
      products = products.map((p) => ({
        ...p,
        price: formatIndianCurrency(+p.price),
      }));
      res.render("products", {
        path: "/products",
        css: { productCSS: true },
        products,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.getAddProductPage = (req, res) => {
  res.render("add-product", { path: "/add-product", css: { formCSS: true } });
};

exports.postAddProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  const product = new Product(name, description, price, image);
  product.save().then(() => {
    res.redirect("/");
  });
};

exports.getProductDetailsPage = (req, res) => {
  const { id } = req.params;
  console.log("I AM HERE ");
  Product.findById(+id)
    .then(([products]) => {
      if (products?.length)
        res.render("product-details", {
          product: products[0],
          css: {},
          path: "/products",
        });
      else res.render("404", { css: {} });
    })
    .catch((err) => {
      console.log(err);
    });
};
