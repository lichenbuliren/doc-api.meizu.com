##API路由设计

### get  /admin/ 文档系统 管理后台首页

不接收参数

示例： doc.meizu.com/admin/


### get /admin/projects/:id 获取指定项目下的接口信息  

* id项目ID

示例：doc.meizu.com/admin/projects/556


### post /admin/projects 添加项目信息
接收post参数

* name `String` 项目名称
* author `String` 录入人


### get /admin/projects/:id/modules/:mid/api  获取指定项目下的指定模块下面的所有接口信息

* 项目ID：id
* 项目ID下的模块ID：mid


### post /admin/projects/:id/



### get /admin/projects/:id/modules/:mid/api/:aid 获取指定接口信息

* 接口ID：aid



