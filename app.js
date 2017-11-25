// 用skema示例
// 1 引用mongoose模块
var mongoose = require('mongoose');

// 2 创建一个数据库连接
var db = mongoose.createConnection('localhost','nasi');

// 3 定义一个Schema
var PersonSchema = new mongoose.Schema({
  name: {type: String}   //定义一个属性name，类型为String
});

// 4-0 给PersonSchema创建静态方法
PersonSchema.statics.findByName = function (name, cb) {
    this.find({ name: name}, cb); // 这个方法被model调用 所以 不用加thif.model
}

// 4-1 创建一个model 同时创建一个集合 可以直接在model上操作数据库 比如增加一条数据 create， 等等。如果在schema上创建了静态方法 比如删除 就可以直接使用
var PersonModel = db.model('Cats', PersonSchema);


// 直接创建 用PersonModel的create方法
/*PersonModel.create({name:'Krouky552'}, (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
})*/

// 5-1 直接在model上调用skema的静态方法
PersonModel.findByName('benben5', function (err, animals) { 
    console.log(animals);
});
