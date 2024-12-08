const express = require("express");
const ordersController = require("../controllers/orders");

const router = express.Router();

router.get("/orders", ordersController.getOrdersPage);

module.exports = router;
