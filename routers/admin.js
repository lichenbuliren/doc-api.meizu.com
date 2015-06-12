var bodyParse = require('koa-body')();
var MD5 = require('MD5');
var Admin = require('../models/Admin');
var router = require('koa-router')();
module.exports = function(app) {

    router.get('/', function*(next) {
        this.body = {
            "error_code": "200",
            "message": "hello world"
        }
    });

    router.get('/login',function*(next){
        this.body = {
            "error_code": '402',
            "message": '用户名或密码错误！请重新登录'
        }
    });

    router.post('/login',bodyParse, function*(next) {
        var data = this.request.body,
            password = MD5(data.password),
            admin;
        console.log(data);
        this.body = {
            "error_code":200,
            "message": "hello world"
        }
        // try {
        //     admin = yield Admin.findOne({
        //         'email': data.email,
        //         'password': password
        //     }).exec();

        //     if (admin) {
        //         this.body = admin;
        //     } else {
        //         this.body = {
        //             "error_code": '402',
        //             "message": '用户名或密码错误！请重新登录'
        //         }
        //     }
        // } catch (e) {
        //     this.body = {
        //         "error_code": '500',
        //         "message": '服务器错误，请稍后重试！'
        //     }
        // }
    });

    app.use(router.routes());
}