var io = require('socket.io-client');
const port = 32003;
var socket = io.connect('http://localhost' + ':' + port);
socket.on('reply', function (data) {
  // Pretty-print JSON response
  console.log('socket-io: reply - ' + JSON.stringify(data, null, 2));
});

// MARK: - Run Loop

const canvasWidth = 640;
const canvasHeight = 480;

var runLoop = function() {
  // var runInt = setInterval(function() {
  //   console.log('emitting clearScreen command')
  //   socket.emit('command', { command: 'clearScreen' });
  // }, 5000);

  // Draw blue points top to bottom, left to right across entire canvas,
  // one point per second
  // var r = 0;
  // var c = 0;
  // var runInt = setInterval(function() {
  //   console.log('emitting drawPoint command');
  //   socket.emit('command', {
  //     command: 'drawPoint',
  //     x: c,
  //     y: r,
  //     color: [0, 0, 255, 1]
  //   })
  //   r++;
  //   if (r >= canvasHeight) {
  //     r = 0;
  //     c++;
  //   }
  // }, 1000);

  // Draw two sides of an obtuse blue triangle from top left to center to middle right
  // every 5 s
  // var runInt = setInterval(function() {
  //   socket.emit('command', {
  //     command: 'drawLine',
  //     vertices: [[0, 0], [canvasWidth / 2, canvasHeight / 2], [canvasWidth, canvasHeight / 2]],
  //     color: [0, 0, 255, 1]
  //   })
  // }, 5000);

  // Draw a filled blue triangle from top left to center to middle left every 5 s
  // var runInt = setInterval(function() {
  //   socket.emit('command', {
  //     command: 'drawShape',
  //     vertices: [[0, 0], [canvasWidth / 2, canvasHeight / 2], [0, canvasHeight / 2]],
  //     color: [0, 0, 255, 1],
  //     shouldFill: true
  //   })
  // }, 5000);

  // Draw a filled blue ellipse in the center of the screen every 5 s
  // var runInt = setInterval(function() {
  //   socket.emit('command', {
  //     command: 'drawEllipse',
  //     centerX: canvasWidth / 2,
  //     centerY: canvasHeight / 2,
  //     width: canvasWidth / 2,
  //     height: canvasHeight / 2,
  //     color: [0, 0, 255, 1],
  //     shouldFill: true
  //   })
  // }, 5000);

  // Draw a filled blue ellipse in the center of the screen and clear it after 5s
  var shouldClear = false;
  var runInt = setInterval(function() {
    shouldClear = !shouldClear;
    if (shouldClear) {
      console.log('emitting clearScreen command');
      socket.emit('command', { command: 'clearScreen' });
    } else {
      console.log('emitting drawEllipse command');
      socket.emit('command', {
        command: 'drawEllipse',
        centerX: canvasWidth / 2,
        centerY: canvasHeight / 2,
        width: canvasWidth / 2,
        height: canvasHeight / 2,
        color: [0, 0, 255, 1],
        shouldFill: true
      })
    }
  }, 5000);
};

runLoop();
