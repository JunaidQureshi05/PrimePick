const fs = require("fs");
const path = require("path");

const serverFilePath = path.dirname(require.main.filename);
let DBFilePath = path.join(serverFilePath, "db", "products.json");

exports.readDBFile = () =>
  new Promise((res, rej) => {
    fs.readFile(DBFilePath, "utf-8", (err, data) => {
      if (err) {
        res([]);
        return;
      } else {
        if (data) {
          let processedData = JSON.parse(data);
          res(processedData);
        } else {
          res([]);
        }
      }
    });
  });

exports.writeDBFile = (content) =>
  new Promise((res, rej) => {
    fs.writeFile(DBFilePath, JSON.stringify(content), (err, data) => {
      if (err) {
        res(false);
      } else {
        res(true);
      }
    });
  });



  exports.formatIndianCurrency = function (amount) {
    const formattedAmount = amount.toLocaleString("en-IN");
    return `₹${formattedAmount}`;
  }