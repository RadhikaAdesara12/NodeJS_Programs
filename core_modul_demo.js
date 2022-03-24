var http=require('http');

http.createServer(function(req,res){
    res.end("Welcome to the Node JS");
}).listen(3000);
console.log("127.0.0.3000");