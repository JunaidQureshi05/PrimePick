const express = require("express");
const productController = require("../controllers/products");

const router = express.Router();

router.get("/", productController.getIndex);
router.get("/products", productController.getProductsPage);
router.get("/add-product", productController.getAddProductPage);
router.post("/admin/add-product",productController.postAddProduct);

module.exports = router;
