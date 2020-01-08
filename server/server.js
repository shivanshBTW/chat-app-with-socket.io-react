let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')();

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

io.on('connection',(socket)=>{
    console.log('a user connected');
});

http.listen(3001, function(){
    console.log('listening on *:3001');
});