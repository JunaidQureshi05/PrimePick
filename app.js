const express = require("express");
const fs = require("fs");
const app = express();
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const _404Controller = require("./controllers/404");
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(productRoutes);
app.use(cartRoutes);
app.use(orderRoutes);

app.use("/", _404Controller.get404Page);

app.listen(PORT, () => {
  console.log("Server started🚀");
});
