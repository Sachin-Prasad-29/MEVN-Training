const fs = require('fs/promises');
const path = require('path');
var os = require("os");

const filePath = path.join(__dirname, 'hello.txt');


const writeHelloFile = async () => {
    try {
        await fs.writeFile( filePath, 'THis is the WRiteFIle content', 'utf-8' );
        console.log( 'writeFile completed' );
    } catch( error ) {
        console.error( error.message );
    }
};


// How do we append to existing contents instead of overwriting the contents of the file?
const appenndHelloFile = async () => {
  try {
    await fs.appendFile(filePath, 'New Content added '+os.EOL, 'utf-8');
    console.log('appendFile');
  } catch (error) {
    console.error(error.message);
  }
};

writeHelloFile();
appenndHelloFile();
