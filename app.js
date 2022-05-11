const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const studentRouter = require('./routes/studentRoute');

const app = express();

// 配置跨域
app.all('*', async (req, res, next) => {
  // 设置允许跨域的地址
  res.header('Access-Control-Allow-Origin', '*');
  // 配置请求头允许携带的字段
  res.header('Access-Control-Allow-Headers', 'Content-type, Content-Length, Authorization, Accept, X-Requested-With')
  // 配置允许跨域请求的方法
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // 允许客户携带验证信息
  res.header('Access-Control-Allow-Credentials', true);
  // 如果是options请求，则快速结束
  if (req.method == 'OPTIONS') {
    res.end();
  }
  // 执行后续... 保持洋葱模型
  await next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);

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
