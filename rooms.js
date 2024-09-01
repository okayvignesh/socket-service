const rooms = {};

function createRoom(roomName) {
    if (!rooms[roomName]) {
        rooms[roomName] = {
            name: roomName,
            users: [],
        };
    }
    return rooms[roomName];
}

function joinRoom(roomName, userId) {
    const room = rooms[roomName] || createRoom(roomName);
    if (!room.users.includes(userId)) {
        room.users.push(userId);
    }
    return room;
}

function leaveRoom(roomName, userId) {
    const room = rooms[roomName];
    if (room) {
        room.users = room.users.filter(user => user !== userId);
        if (room.users.length === 0) {
            delete rooms[roomName];
        }
    }
}

function getRoom(roomName) {
    return rooms[roomName] || null;
}

function getAllRooms() {
    return rooms;
}

module.exports = {
    createRoom,
    joinRoom,
    leaveRoom,
    getRoom,
    getAllRooms,
};
