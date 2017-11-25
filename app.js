// 用skema示例
// 1 引用mongoose模块
var mongoose = require('mongoose');

// 2 创建一个数据库连接
var db = mongoose.createConnection('localhost','nasi');

// 3 定义一个Schema
var PersonSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number}   //定义一个属性name，类型为String
});

// 4-0 给PersonSchema创建静态方法
// 查找数据
PersonSchema.statics.findByName = function (name, cb) {
    this.find({ name: name}, cb); // 这个方法被model调用 所以 不用加thif.model 加了也可以 有两种写法
    // return this.model('Person').find({name: name}, cb);
}

// 4-1 创建一个model 同时创建一个集合 可以直接在model上操作数据库 比如增加一条数据 create， 等等。如果在schema上创建了静态方法 比如删除 就可以直接使用
var PersonModel = db.model('Person', PersonSchema, 'Person'); // 集合名如果是单数形式 必须要加第三个参数 且数据库就是‘Person’ 大写的

// 插入数据
// 直接创建 用PersonModel的create方法
PersonModel.create({name:'dodo', age: 40}, (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
})

// 5-1 直接在model上调用skema的静态方法
// 查找数据
/*PersonModel.findByName('Krouky22', function (err, result) { 
	if (err) {
		console.log(err);
		return;
	}
	console.log(result.length);
	db.close();
});*/

// 修改数据

// 定义更改数据的静态方法
PersonSchema.statics.update = (conditions, update, options, callback) => {
	this.update(conditions, update, options, callback);
}
// 调用更改数据的静态方法
var conditions = {name : 'Krouky777'};
var update     = {$set: {age : 18}};
var options    = {upsert : true};

/*PersonModel.update(conditions, update, options, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('update ok!');
    }
    //关闭数据库链接
    db.close();
})
*/