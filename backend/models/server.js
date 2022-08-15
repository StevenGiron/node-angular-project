const express = require('express')

module.exports = Server;

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(8080);