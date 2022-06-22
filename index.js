const express = require("express");
// const mysql = require("mysql");
const app = express();
const path = require("path");
const router = express.Router();
//add the router
app.use("/", router);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "system",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected..");
  // insertData('Pramod', '12344', '12344');

  getData(); // getting all the data from table
});
function getData() {
  let sql = "SELECT * FROM register";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/login.html"));
});

router.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname + "/dashboard.html"));
});

app.listen(process.env.port || 3000, () => {
  console.log("Running at Port 3000");
});
