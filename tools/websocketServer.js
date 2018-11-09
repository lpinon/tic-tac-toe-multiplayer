const WebSocket = require('ws');

const ws = new WebSocket.Server({ port: 8080 });

ws.on('open', function open() {
  console.log('[WEBSOCKET] New Client Connected');
});

ws.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
