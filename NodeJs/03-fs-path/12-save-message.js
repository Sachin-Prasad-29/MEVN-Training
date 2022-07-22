const fs = require('fs')  ;
const path = require ('path') ;
const http = require('http');

const server = http.createServer((req,res) => {

    req.on('data', chunk =>{
      console.log(chunk.toString('utf-8'));
      res.write(chunk);
    });

    req.on('end',function(){
      res.end('\n This is some request');
    });

} );

  server.listen( 8000 );
