const fs = require('fs')  ;
const path = require ('path') ;

const readFile = path.join(__dirname,"Sea - 53127.mp4");
const writeFile = path.join(__dirname,"hello.mp4");

const rs = fs.createReadStream(readFile);
const ws = fs.createWriteStream(writeFile);

//start reading from read stream using straming and writes to write stream 
// pipe avoid memory bloat which can happen if we handle the stream event ourselves

rs.pipe(ws);