/**
 * server.js file representing server startup
 * @author Deva <deva@cogzidel.com>
 */
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();

//set publicpath access from root directory 
app.use(serveStatic(__dirname + "/dist"));

// port address for server startup
var port = process.env.PORT || 5000

// Server starting
app.listen(port);
console.log('starting project at ' + port);