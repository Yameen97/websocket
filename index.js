const express = require("express");
const http = require("http")
const WebSocket = require("ws");

const app = express();

const server = http.createServer(app);

const wsServer = new WebSocket.Server({ server: server });

wsServer.on("connection", (socket) => {

  // Sending welcome message
  socket.send("Welcome to the WebSocket Client!");

  socket.on("text", function text(data) {

    console.log("Received text: " + data)
    
    // Receiving further messages 
    socket.send('New text: ' + text)
  });

});

app.get("/", (req, res) => res.send("App Running Smoothly!"));

server.listen(5000, () => {
  console.log("Server listening at http://localhost:5000")
});



