const path = require('path');
global.appRoot = path.resolve(__dirname);

const app = require('./src/app');
const mongoose = require('mongoose');
const debug = require('debug')('express-restapi-base');
const http = require('http');
const {parsePort} = require('./src/shared/utils/common');

const port = parsePort(process.env.PORT || '4001');
app.set('port', port);

const server = http.createServer(app);

server.on('error', function (error) {
    console.log(error);
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.on('listening', () => {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Listening on ' + bind);
});

process.on('uncaughtException', function( err ) {
    console.error(err.stack);
});

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("database connection closed");
        process.exit(0);
    });
});

server.listen(port);