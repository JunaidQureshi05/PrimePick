
const express = require('express')
const fs = require("fs")
const app = express();

const PORT  = 3000 ;

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine','ejs');
app.set('views','views')



app.get('/',(req,res)=>{
      fs.readFile("db/products.json", "utf-8", (err, data) => {
        console.log("@@@@@@", err, data);
        if (err) {
          fileData = [];
        } else {
          fileData = JSON.parse(data);
        }

    res.render("index",{products:fileData,path:'/'});
      });

})

app.get("/products", (req, res) => {
    res.render("products", {  path: "/products" });
});
app.get("/admin/add-product", (req, res) => {
  res.render("add-product");
});

app.post("/admin/add-product", (req, res) => {
    let product = {title:req.body.name};
    let fileData;
    fs.readFile("db/products.json","utf-8",(err,data)=>{
        console.log("@@@@@@",err,data)
        if(err){
            fileData = []
        }
        else{
            fileData = JSON.parse(data)
        }

        console.log("HERE I AM", fileData);

        console.log("1.before",fileData)
        fileData.push(product);
        console.log("2.after",fileData)
        fs.writeFile(
          "db/products.json",
          JSON.stringify(fileData),
          (err, data) => {}
        );
    })
    
  res.redirect("/")
});


app.listen(PORT,()=>{
    console.log("Server started🚀")
})

