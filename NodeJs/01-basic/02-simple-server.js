const http = require('http');

//asynchrnous non-blocking function
const server = http.createServer();

//'resquest' is an event which fires on the server when an HTTP request is recived by the server. We setup the function to be called on this event.

//Hey server when you receive requests Please call this method to sent the response
server.on('request',(req,res) => {
  res.end('Hello Wodrld!');
})

// in case the server throws an error at startup lets up print the error
server.on('error',error=>{
  console.log(error.message);
});

// If server run successfully this will execute
server.on('listening', () => {
  console.log('Hurray!Server up and runnin. Check http://localhost:8000');
})

server.listen(8000);
