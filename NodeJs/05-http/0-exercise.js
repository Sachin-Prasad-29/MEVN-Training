const http = require('http');
const url = require('url');
const server = http.createServer((req,res) => {

console.log(url.parse(req.url,true));
const {
    pathname,
    query:{
        x,
        y
    }
      } =url.parse(req.url,true);
      const a = parseInt(x);
      const b = parseInt(y);
   if(pathname === '/add'){
    res.end(`${a+b}`);
   }if(pathname === '/sub'){
    res.end(`${a-b}`);
   }if(pathname === '/multiply'){
    res.end(`${a*b}`);
   }if(pathname === '/divide'){
    res.end(`${a/b}`);
   }  
   else{
    res.end(`Unsuppoerted`);
   } 
});

server.listen(8080);