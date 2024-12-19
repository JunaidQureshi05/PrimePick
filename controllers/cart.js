exports.getCartPage = (req, res) => {
  res.render("cart", { path: "/cart", css: {} });
};

exports.addToCart = (req, res) => {
  const { id } = req.params;
  console.log("@@@@@@ID IS ", id);
};
