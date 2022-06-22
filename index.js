import express from 'express'
import mysql from 'mysql'
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'system'
});
connection.connect((err)=>{
    if(err)throw err;
    console.log("Connected..");
    // insertData('Pramod', '12344', '12344');

     getData();   // getting all the data from table
});
function getData(){
    let sql = 'SELECT * FROM register';
    connection.query(sql,(err, result)=>{
        if(err) throw err;
        console.log(result);
    });
    }
    app.get('/',function(req,res) {
        res.render('index');
      });
app.listen(5000, () => {
  console.log(`App listening at http://localhost:5000`);
});
