const express = require("express");
const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/cart", cartController.getCartPage);

module.exports = router;
