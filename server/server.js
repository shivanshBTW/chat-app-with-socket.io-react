const io = require('socket.io')();

io.on('connection', (client) => {
    console.log('connection made');
    client.on('messageSent', (messageObj) => {
        // socketasdad[messageObj] = io.sockets;
        console.log(`${messageObj.username} sent a message: ${messageObj.text}`);
        io.emit('messageReceived', messageObj);
    });
});



const port = 8000;
io.listen(port);
console.log('listening on port ', port);