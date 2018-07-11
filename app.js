var io = require('socket.io-client');
const port = 32003;
var socket = io.connect('http://localhost' + ':' + port);
socket.on('reply', function (data) {
  // Pretty-print JSON response
  console.log('socket-io: reply -' + JSON.stringify(data, null, 2));
});

// MARK: - JSON Helpers

var boolToString = function(bool) {
  return bool ? "true" : "false";
}

var arrayToString = function(array) {
  var arrayString = '[';
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arrayString += arrayToString(array[i]);
    } else {
      arrayString += array[i];
    }
    if (i < array.length -1) {
      arrayString += ', ';
    }
  }
  arrayString += ']';
  return arrayString;
}

// MARK: - Run Loop

var runLoop = function() {
  // Draw two sides of an obtuse blue triangle from top left to center to middle right
  // var runInt = setInterval(function() {
  //   let vertices = [[0, 0], [canvasWidth / 2, canvasHeight / 2], [canvasWidth, canvasHeight / 2]];
  //   drawLine(projector.ofApp, vertices, [0, 0, 255, 1]);
  // }, 5000);
  
  // Draw a filled blue triangle from top left to center to middle left
  // var runInt = setInterval(function() {
  //   drawShape(projector.ofApp, [[0, 0], [canvasWidth / 2, canvasHeight / 2], [0, canvasHeight / 2]], [0, 0, 255, 1], true);
  // }, 5000);

  // Draw a filled blue ellipse in the center of the screen.
  // var runInt = setInterval(function() {
  //   let x = canvasWidth / 2;
  //   let y = canvasHeight / 2;
  //   let w = canvasWidth / 2;
  //   let h = canvasHeight / 2;
  //   drawEllipse(projector.ofApp, x, y, w, h, [0, 0, 255, 1], true);
  // }, 5000);

  // var runInt = setInterval(function() {
  //   console.log('alive');
  // }, 5000);

  // var runInt = setInterval(function() {
  //   console.log('emitting command')
  //   socket.emit('command', null);
  // }, 5000);

  // Draw blue points top to bottom, left to right across entire canvas,
  // one point per second
  var r = 0;
  var c = 0;
  var runInt = setInterval(function() {
    socket.emit('command', {
      command: 'drawPooint',
      x: c,
      y: r,
      color: [0, 0, 255, 1]
    })
    r++;
    if (r >= canvasHeight) {
      r = 0;
      c++;
    }
  }, 1000);
};

runLoop();
