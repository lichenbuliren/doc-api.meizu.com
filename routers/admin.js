var bodyParse = require('koa-body')();
var MD5 = require('MD5');
var Admin = require('../models/Admin');
var router = require('koa-router')();
module.exports = function(app) {
    router.post('/login', bodyParse, function*(next) {
        var data = this.request.body,
            password = MD5(data.password),
            admin;
        try {
            admin = yield Admin.findOne({
                'email': data.email,
                'password': password
            }).exec();
        } catch (e) {
            this.body = {
                "error_code": '500',
                "message": '服务器错误，请稍后重试！'
            }
        }

        if (admin) {
            this.body = {
                "error_code": 200,
                "data": admin
            };
        } else {
            this.body = {
                "error_code": 203,
                "message": '用户名或密码错误！请重新登录'
            }
        }
    });

    router.get('/projects',function*(next){
        var projects = [];
        this.body = {
            "error_code":200,
            "data": projects
        }
    });
    app.use(router.routes());
}