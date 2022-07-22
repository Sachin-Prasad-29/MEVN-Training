const fs = require('fs')  ;
const path = require ('path') ;

const readFile = path.join(__dirname,"Sea - 53127.mp4");
const writeFile = path.join(__dirname,"hello.mp4");

const rs = fs.createReadStream(readFile);
const ws = fs.createWriteStream(writeFile);

rs.on('data',chunk =>{
    ws.write(chunk);   
});

rs.on('end',() => ws.end());
