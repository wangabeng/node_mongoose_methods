// 用skema示例 创建实体来插入数据库
// 1 引用mongoose模块
var mongoose = require('mongoose');


// 如果保存后加入回调函数 这里必须加上增加promise属性
mongoose.Promise = global.Promise; // 可选项

// 2 创建一个数据库连接
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/nasi');

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// 3 定义一个Schema
var PersonSchema = new mongoose.Schema({
  name: {type : String}   //定义一个属性name，类型为String
});

// 4-1 创建一个model 同时创建一个集合 可以直接在model上操作数据库 比如增加一条数据 create， 等等。如果在schema上创建了静态方法 比如删除 就可以直接使用
// var PersonModel = db.model('Person',PersonSchema); //mongdb居然person和people都区分，真是醉了 这样写 自动创建people的集合 为安全起见 可以加第三个参数 第三个参数’CN.User’ 就是实际的 collection的名称
var PersonModel = db.model('Person', PersonSchema, 'Person'); 

/*
// 5-0 创建一个personEntity实体
var personEntity = new PersonModel({name:'Krouky777'});

personEntity.save(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    db.close();
});
*/
// 直接创建 用PersonModel的create方法
PersonModel.create({name:'Krouky55'}, (err) => {
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    db.close();
})
