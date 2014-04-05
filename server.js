var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config'),
    auth = require('./server/config/middlewares/authorization'),
    mongoose = require('mongoose');

//Bootstrap db connection
var db = mongoose.connect(config.db);


//Bootstrap models
var models_path = __dirname + '/server/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

//bootstrap passport config
require('./server/config/passport')(passport);

var app = express();

//express settings
require('./server/config/express')(app, passport, db);

//Bootstrap routes
require('./server/config/routes')(app, passport, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//Initializing logger
logger.init(app, passport, mongoose);

//expose app
exports = module.exports = app;
