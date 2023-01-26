console.log("HELLO WORLD");
const http=require("http")
const fs=require("fs")

const server=http.createServer(function(req,res){
   res.setHeader("content-type","text/html")
   switch(req.url){
   case "/":
        fs.readFile("./home.html",(err,data)=>err?res.end(err):res.end(data));
        break;
        case "/icon.jpg":
          res.setHeader("content-type","image/jpeg")
         fs.readFile("icon.jpg",(err,data)=>err?res.end(err):res.end(data));
         
        break;
   case "/about":
         fs.readFile("./about.html",(err,data)=>err?res.end(err):res.end(data));
       break;
         default:res.end("error");
         break;
     
}})

server.listen(5000,()=>{
  console.log("server runing")
})





