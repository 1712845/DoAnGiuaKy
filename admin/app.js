var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mapsRouter = require('./routes/maps');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var inboxRouter = require('./routes/inbox');
var inbox2Router = require('./routes/inbox_2');
var errorRouter = require('./routes/404');
var blankRouter = require('./routes/blank');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/maps', mapsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/inbox', inboxRouter);
app.use('/inbox_2', inbox2Router);
app.use('/404', errorRouter);
app.use('/blank', blankRouter);
app.use('/product', productRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
