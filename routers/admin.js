var bodyParse = require('koa-body')();
var MD5 = require('MD5');
var _ = require('lodash');

var Admin = require('../models/Admin');
var Project = require('../models/Project');

var router = require('koa-router')({
    prefix: '/admin'
});
module.exports = function(app) {

    // 登录请求
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

    // 获取文档信息
    router.get('/projects',function*(next){
        var projects;
        try{
            projects = yield Project.find().exec();
        }catch(e){
            this.body = {
                "error_code" : 500,
                "message" : "获取数据失败，请稍后重试！"
            }
        }

        this.body = {
            "error_code":200,
            "data": projects || []
        }
    });

    router.post('/projects',function*(next){

    });
    app.use(router.routes());
}