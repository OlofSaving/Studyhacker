
function emitUserAdded(io, user_id, board_id) {
    //degub
    console.log(`Emitting board-shared to user-${user_id}`);

    io.to(`user-${user_id}`).emit("board-shared", board_id);
}

function emitBoardDeleted(io, user_id, board_id) {
    //debugg
    console.log(`Emitting board deleted to user-${user_id}`)
    io.to(`user-${user_id}`).emit("board-deleted", board_id);
}

module.exports = {
    emitUserAdded
};