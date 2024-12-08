const fs = require("fs");
const path = require("path");

const serverFilePath = path.dirname(require.main.filename);
let DBFilePath = path.join(serverFilePath, "db", "products.json");

exports.readDBFile = () => new Promise((res,rej)=>{
  fs.readFile(DBFilePath,'utf-8',(err,data)=>{
    console.log("@@@@@@@@@",data)
    if(err){
      res([])
      return;
    }
    else{
       if(data){
let processedData = JSON.parse(data);
res(processedData);
       }
       else{
        res([])
       }
      
    }
  })
})

exports.writeDBFile =(content)=> {
  console.log('this one ',DBFilePath,content)
  fs.writeFile(DBFilePath,JSON.stringify(content),(err,data)=>{
    console.log("inside callback")
  });
}
