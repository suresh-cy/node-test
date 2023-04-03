var http = require('http');
var port=process.env.PORT;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
alert(port)
  res.end('Hello World OK IT WORKSSSSS!');
}).listen(port);
