const fs = require( 'fs' );
const path = require( 'path' ); // platform-independent file paths

// 2 special variables in a Node script
console.log( __filename );
console.log( __dirname );

const filePath = path.join( __dirname, '..', 'index.md' );

// asynchronous
// the callback function is called when the file has been read
fs.readFile( filePath, 'utf-8', ( error, contents ) => {
    if( error ) {
        console.error( error.message );
        return;
    }

    // If we do not pass encoding as 2nd argument we get a buffer (a byte array)
    // console.log( contents.toString( 'utf-8' ) );
    console.log( contents );
});

console.log( 'last line of script' );