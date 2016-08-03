'use strict';

var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 8080;

app.server = server;
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.render('index');
});

server.listen(port, function () {
    console.log('Server listening on port:', this.address().port);
});
