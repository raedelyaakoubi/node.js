const fs=require("fs")
fs.writeFile("welcome.txt","Hello Node",(err)=>{
    if (err){console.log(error)}
    else {console.log("file was write")};
})

const http=require("http")
const server=http.createServer(function(req,res){
    res.setHeader("content-type","text/html")
    fs.readFile("./sr.html",(err,data)=>
    err?res.end(err.message):res.end(data)
    )}
    )
    server.listen(4000,()=>{
        console.log("server runing")
      })