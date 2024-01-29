// const http = require('http');
import http from 'http';
// import https from 'https'; // port 443

import { config } from './app/config.js';
import { app } from './app/index.js';

const { port } = config;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
