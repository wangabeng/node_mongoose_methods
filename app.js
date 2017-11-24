// 不用skema实例
// 1 引用mongoose模块
/*
var mongoose = require('mongoose');

// 如果保存后加入回调函数 这里必须加上增加promise属性
mongoose.Promise = global.Promise; // 可选项

// 2 创建一个数据库连接 连接到书库nasi上
var db = mongoose.createConnection('mongodb://localhost/nasi');

// 3 创建一个model('Cat'表示一个集合名，在mongodb中不区分大小写)
// 这里必须用db来创建model
var Cat = db.model('Cat', {name: String });

// 4 创建一个kitty实例
var kitty = new Cat({name: 'benben5'});

// 5 保存实例到数据库中
kitty.save(() => {
	console.log('ok');
}); // 也可以用then加回调 kitty.save().then() // then内无参数
*/

// 用skema示例
// 1 引用mongoose模块
var mongoose = require('mongoose');

// 2 创建一个数据库连接
var db = mongoose.createConnection('localhost','nasi');

// 3 定义一个Schema
var PersonSchema = new mongoose.Schema({
  name:String   //定义一个属性name，类型为String
});

// 4-0 给PersonSchema创建静态方法
PersonSchema.methods.find = () => {
	// console.log('haha');
	console.log(this);
};

// 4-1 创建一个model 同时创建一个集合 可以直接在model上操作数据库 比如增加一条数据 create， 等等。如果在schema上创建了静态方法 比如删除 就可以直接使用
var PersonModel = db.model('Person',PersonSchema);



// 5-0 创建一个personEntity实体
var personEntity = new PersonModel({name:'Krouky444'});
/*
//打印这个实体的名字看看
console.log(personEntity); //Krouky

personEntity.save();
*/
// 直接创建 用PersonModel的create方法
/*PersonModel.create({name:'Krouky22'}, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('保存成功');
})*/

// 5-1 直接在model上调用skema的静态方法
personEntity.find();