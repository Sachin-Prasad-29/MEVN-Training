//console.log(process);
const http = require("http");
console.log(process.pid);

console.log(process.cwd());

process.on('uncaughtException', error=>{
    console.log(error.message);
    process.exit(1);
});

const server = http.createServer((req,res)=>{
    res.end("hello Node ");
    //foo();
});

server.listen(8080);