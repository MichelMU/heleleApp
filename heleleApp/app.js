var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var routes = require('./routes/index');
var users = require('./routes/users');
var users2 = require('./routes/users2');
var users3 = require('./routes/users3');
var users4 = require('./routes/users4');
var users5 = require('./routes/users5');
var users6 = require('./routes/users6');
var users7 = require('./routes/users7');
var users8 = require('./routes/users8');
var users9 = require('./routes/users9');
var users10 = require('./routes/users10');


var test = require('./routes/test');
var test2 = require('./routes/test2');
var test3 = require('./routes/test3');
var test4 = require('./routes/test4');
var test5 = require('./routes/test5');
var test6 = require('./routes/test6');
var test7 = require('./routes/test7');

var exphbs  = require('express3-handlebars');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(methodOverride()); // simulate DELETE and PUT
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/users2', users2);
app.use('/users3', users3);
app.use('/users4', users4);
app.use('/users5', users5);
app.use('/users6', users6);
app.use('/users7', users7);
app.use('/users8', users8);
app.use('/users9', users9);
app.use('/users10', users10);


app.use('/test', test);
app.use('/test2', test2);
app.use('/test3', test3);
app.use('/test4', test4);
app.use('/test5', test5);
app.use('/test6', test6);
app.use('/test7', test7);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


