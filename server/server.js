const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let players = {};

wss.on('connection', (ws) => {
  const id = Date.now();
  players[id] = { x: 100, y: 100 };

  ws.on('message', (msg) => {
    const data = JSON.parse(msg);
    players[id] = data;
  });

  ws.on('close', () => {
    delete players[id];
  });
});

setInterval(() => {
  const state = JSON.stringify(players);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(state);
    }
  });
}, 100);

app.get('/', (req, res) => res.send('Survivalist MMO Server Running'));

server.listen(3000, () => console.log('Server running on port 3000'));