var express = require('express');
var logfmt = require("logfmt");
var app = express();

app.use(express.static('app'));
app.use(logfmt.requestLogger());

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});