var app = {
    name: 'app.js',
    startDate: new Date(),
};

// TODO: START HERE

var initialize = function(callback) {
  var net = require('net');
  var client = new net.Socket();
  client.connect(32001, 'localhost', function() {
    callback(null, client);
  });
  client.on('error', function(err) {
    callback(err, client);
  });
};
