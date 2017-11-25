# node_mongoose_methods
node使mongoose连接数据库

node通过mongoose连接mongodb不用skema示例

node通过mongoose连接mongodb用skema示例

详细使用方法 参考：
http://ourjs.com/detail/53ad24edb984bb4659000013

一个大坑 在创建model的时候 集合名用复数 这里有三个参数 第一个是集合名命名 第二个是定义的schema 第三个可以强行设置集合名 比如 我不需要他加s 他就不会加s
如果只有两个参数   db.model('Person', PersonSchema) ，mongoose会自动转化为复数 people 比较奇葩吧 哈哈
var PersonModel = db.model('Person', PersonSchema, 'Person');

这是一篇更加详细的介绍mongoose使用的文章 （超详细）
https://segmentfault.com/a/1190000010688972