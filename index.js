const http = require('http')
const url = require('url')
const pathurl = require('path')
const fs = require('fs')
 http.createServer((req,res) =>{
 	const pathname = url.parse(req.url).pathname
 	const extname = pathurl.extname(pathname)
 	// if(pathname=="/"){
 	// 	pathname = "index.html"
 	// }
 	console.log(pathname)
	fs.readFile("./static/"+pathname,(err,data)=>{
     if(err){
     	fs.readFile("./static/404.html",(err,data)=>{
     		res.writeHead(404,{"Content-type":"text/html;charset=UTF8"})
     		res.end(data)
     	})
     	return;
     }
     const mime =getMime(extname)
     res.writeHead(200,{"Content-type":mime})
     res.end(data)
	})
	
}).listen(3000,"127.0.0.1")
 function getMime(extname){
    switch(extname){
    	case ".html":
    	  return "text/html";
    	case ".jpg":
    		return "image/jpg"
    }
 }