const fs = require( 'fs/promises' );
const path = require( 'path' );

const filePath = path.join( __dirname, '..', 'index.md' );

// asynchronous
fs.readFile( filePath, 'utf-8' )
    .then(contents => {
        console.log( contents );
    })
    .catch(error => {
        console.error( error.message );
    });

console.log( 'last line of script' );