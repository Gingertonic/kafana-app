// const express = require("express")
// const app = express()
const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server) // integrate our http server with a new instance of socket.io

io.on('connection', () => {
    console.log('A new connection has been made!')
})

app.get('/', (req, res) => {
    res.send('Hi there')
});

server.listen(5001, () => {
    console.log('Now serving up fresh data on port 5001!')
});