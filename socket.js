const rooms = require('./rooms');
const { Server } = require('socket.io');
let socketInstance = null;

// socket initialization

function init(server) {
    if (!socketInstance) {

        const socket = new Server(server, {
            cors: {
                origin: '*',
            }
        });

        socket.on('connection', (socket) => {

            socket.on('joinRoom', (roomName) => {
                rooms.joinRoom(roomName, socket.id);
                socket.join(roomName);
            });

            socket.on('leaveRoom', (roomName) => {
                rooms.leaveRoom(roomName, socket.id);
                socket.leave(roomName);
            });

            socket.on('disconnect', () => {
                console.log('User disconnected');
            });

            socketInstance = socket;
        });
    }
}


// Returns the socket instance
function get() {
    if (!socketInstance) {
        throw new Error('Socket is not initialized!');
    }
    return socketInstance;
}

module.exports = {
    init,
    get,
};
