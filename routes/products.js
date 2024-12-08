const express = require("express")
const productController = require("../controllers/products")

const router  = express.Router()



router.get("/", productController.getIndex);
router.get("/products", productController.getProductsPage);
router.get("/add-product",productController.getAddProductPage)
router.get("/products", (req, res) => {
  res.render("products", { path: "/products" });
});
router.get("/admin/add-product", (req, res) => {
  res.render("add-product");
});

module.exports = router;