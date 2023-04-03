var express= require('express');
var app=express();
var port=process.env.PORT;
app.get('/',function (req, res) {
  res.header("Access-Control-Allow-Origin","*");

  res.send('Hello World OK IT WORKSSSSS!');
})

app.listen(port,()=>{
console.log("connected")
})