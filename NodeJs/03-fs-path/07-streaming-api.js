const fs = require('fs')  ;
const path = require ('path') ;

const filePath = path.join(__dirname,"Sea - 53127.mp4");

const rs = fs.createReadStream(filePath);
let count = 0;

rs.on('data',chunk =>{
    console.log(chunk);
    count++;
});
rs.on('end', () => {
    console.log('number of chunks read =', count);
});

