const db = require("mysql2/promise");

const dbConnection = db.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "PrimePick",
  password: "9156560407",
});

module.exports = dbConnection;
