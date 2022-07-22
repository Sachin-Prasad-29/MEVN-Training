const fs = require('fs')  ;
const path = require ('path') ;
const http = require('http');

const server = http.createServer((req,res) => {
    const rs = fs.createReadStream(path.join(__dirname,'hello.txt'));
    rs.pipe(res);
} );

  server.listen( 8000 );
