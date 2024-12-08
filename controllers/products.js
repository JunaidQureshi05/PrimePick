


exports.getIndex = (req,res)=>{
    res.render('index',{path:"/"});
}

exports.getProductsPage = (req, res) => {
  res.render("products",{path:'/products'});
};

exports.getAddProductPage = (req, res) => {
  res.render("add-product", { path: "/add-product" });
};
