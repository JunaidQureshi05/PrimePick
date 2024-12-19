const express = require("express");
const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/cart", cartController.getCartPage);
router.post("/add-to-cart/:id", cartController.addToCart);

module.exports = router;
