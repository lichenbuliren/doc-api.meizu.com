var bodyParse = require('koa-body')();
var MD5 = require('MD5');
var Admin = require('../models/Admin');
var router = require('koa-router')();
module.exports = function(app) {

    app.use(router.routes());
}