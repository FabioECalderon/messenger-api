// const http = require('http');
import http from 'http';
// import https from 'https'; // port 443

import { port } from './config';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
