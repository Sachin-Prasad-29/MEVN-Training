const fs = require( 'fs' );
const path = require( 'path' ); // platform-independent file paths

// 2 special variables in a Node script
console.log( __filename );
console.log( __dirname );

const filePath = path.join( __dirname, '..', 'index.md' );

// asynchronous
// the callback function is called when the file has been read
try{
    const contents = fs.readFileSync(filePath, 'utf-8');
    console.log(contents);

}catch(error){
    console.log(error.message);
}

console.log( 'last line of script' );