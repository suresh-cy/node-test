var express= require('express');
var app=express();
var port=process.env.PORT;

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysql-119413-db.mysql-119413",
    port: "10072",
    user: "admin",
    password: "h82xVHw7",
    database:"node-test"
    
  });
  con.connect(function(err) {
    if (err) throw err;
 
    console.log("Connected!");
  });
  



app.get('/',function (req, res) {
  res.header("Access-Control-Allow-Origin","*");

  res.send('Hello World OK IT WORKSSSSS!');

var ss='INSERT INTO flames (name1,name2,result ) VALUES ("suresh","ram","nothing")';
  con.query(ss,function(err,result,fields){
    if(err){
        console.log(err)
      }else{
        console.log(result)
          console.log(result)
      }
  })



})

app.listen(port,()=>{
console.log("connected at port")
})