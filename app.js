var app = {
  name: 'app.js',
  startDate: new Date(),
};

const ip = 'localhost';
const port = 32002;

var initialize = function(callback) {
  var net = require('net');
  var client = new net.Socket();
  client.connect(port, ip, function() {
    callback(null, client);
  });
  client.on('error', function(err) {
    callback(err, client);
  });
};
