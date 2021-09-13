#!/usr/bin/env node

const app = require('../server/app');
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT);
