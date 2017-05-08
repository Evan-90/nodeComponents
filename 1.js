const http = require('http')
const fs = require('fs')
http.createServer((req,res)=>{
	const num =parseInt(Math.random()*100000);
	console.log("访客"+num)
	fs.readFile("./static/index.html",(err,data)=>{
		console.log("访问页面id"+num)
		res.end(data)
	})
	
}).listen(3000,'127.0.0.1')