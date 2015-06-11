var koa = require('koa');
var path = require('path');
var routers = require('./routers');
var logger = require('koa-logger');
var staticServer = require('koa-static');
var mongoose = require('mongoose');
var config = require('./config');
var app = koa();

app.use(logger());
app.use(staticServer(path.join(__dirname, 'public')));
// app.use(bodyParser());
// 自定义路由
routers(app);

var env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();

var dbUrl = 'mongodb://' + config[env]['host'] + ':' + config[env]['port'] + '/' + config[env]['db'];
mongoose.connect(dbUrl,function(err){
    if(err){
        console.log(err);
    }
    app.listen(4000);
});
