var express= require('express');
var app=express();
var port=process.env.PORT;

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "id20552787_users",
    password: "h2B4@SH>\_0tKR-h",
    database:"id20552787_flamesinfo"
    
  });
  con.connect(function(err) {
    if (err)
 {
  throw err
 }
    else{console.log("Connected!")};
  });
  var ss='INSERT INTO flames (name1,name2,result ) VALUES ("suresh","ram","nothing")';
  con.query(ss,function(err,result,fields){
    if(err){
        console.log(err)
      }else{
        console.log(result)
          console.log(result)
      }
  })




app.get('/',function (req, res) {
  res.header("Access-Control-Allow-Origin","*");

  res.send('Hello World OK IT WORKSSSSS!');
})

app.listen(port,()=>{
console.log("connected at port")
})