const fs = require('fs')  ;
const path = require ('path') ;

const filePath = path.join(__dirname,"hello.txt");

const ws = fs.createWriteStream(filePath,'utf-8');


for( let i = 0 ; i < 100000; i++){
    ws.write(`${i+1}. Hello World\n`);
}
ws.end();
