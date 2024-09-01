const express = require('express');
const http = require('http');
const socketService = require('./socket');
const app = express();
const server = http.createServer(app);
const PORT = 4008;

socketService.init(server);

server.listen(PORT, () => {
    console.log(`Socket service running on port ${PORT}`);
});