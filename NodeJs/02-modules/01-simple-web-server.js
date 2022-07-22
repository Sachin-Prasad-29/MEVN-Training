const http = require( 'http' );
const handlers = require( './handlers' );

const server = http.createServer();

server.on( 'request', handlers.onRequest );

server.on( 'error', handlers.onError );

server.on( 'listening', handlers.onListening );

server.listen( 8080 );