const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000

app.get("/",(req,res,next)=>{
    res.json("tạo tài khoản thành công")
})

io.on('connection', (socket) => { 
    console.log("connnect socket success")
    socket.on('booking',()=>{
        console.log("da chon")
    })

    socket.on('disconnect', () => {
        console.log('User disconnected:');
    });
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})