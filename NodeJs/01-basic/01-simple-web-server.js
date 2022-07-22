const http = require('http');

//asynchrnous non-blocking function
const server = http.createServer((req, res) => {
  res.end('Hello Node');
});
server.listen(8000);
