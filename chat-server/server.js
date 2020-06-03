// const express = require("express")
// const app = express()
const app = require("express")();
const server = require("http").createServer(app);

app.get('/', (req, res) => {
    res.send('Hi there')
});

server.listen(3000, () => {
    console.log('Now serving up fresh data on port 3000!')
});