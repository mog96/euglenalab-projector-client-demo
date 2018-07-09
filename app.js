var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = 32003;

var socket = new io.Socket();
socket.connect('http://localhost' + ':' + port);
socket.on('reply', function (data) {
  console.log('socket-io: reply -' + data);
});


// Draw blue points top to bottom, left to right across entire canvas
// var r = 0;
// var c = 0;
// var runInt = setInterval(function() {
//   drawPoint(projector.ofApp, c, r++, [0, 0, 255, 1]);
//   if (r >= canvasHeight) {
//     r = 0;
//     c++;
//   }
// }, 500);

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