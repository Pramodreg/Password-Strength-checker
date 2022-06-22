var mysql = require('mysql');
const { getEnvironmentData } = require('worker_threads');

var connection = mysql.createConnection({
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


function insertData(uname, paswd, cpaswd){
    let sql = 'INSERT INTO register(UserName,password,confirmpass) VALUES("'+uname+'","'+paswd+'","'+cpaswd+'")';
    connection.query(sql, function(err, result){
        if(err) throw err;
        console.log("Data inserted");
    });
}