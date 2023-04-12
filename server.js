var express= require('express');
var app=express();
var port=process.env.PORT;
var url = require('url');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "52.76.27.242",
    port: "3306",
    user: "sql12612541",
    password: "vJdNjhQxLy",
    database:"sql12612541"
    
  });
  con.connect(function(err) {
    if (err) throw err;
 
    console.log("Connected!");
  });
  



app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
   
    var q=url.parse(req.url,true).query;
var txt=q.name1;
var name1=["'",txt,"'"]
var txt2=q.name2;
var txt3=q.result;
var name2=["'",txt2,"'"]
var result=["'",txt3,"'"]
console.log(name1,name2,result)
console.log(txt,txt2)
   // if(fl!=undefined){

    if( result[1]!= undefined){
        var ss='INSERT INTO flames (name1,name2,result ) VALUES ('+name1.join('')+','+name2.join('')+','+result.join('')+')';
      
      
      con.query(ss,function(err,result,fields){
          if(err){
            console.log(err)
            con.connect();
          }else{
            
              res.send("inserted")
          }
      
      })
}
     // }
})


app.listen(port,()=>{
console.log("connected at port")
})
