// 1 引用mongoose模块
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

/*
var mongoose = require('mongoose');    //引用mongoose模块
var db = mongoose.createConnection('localhost','nasi'); //创建一个数据库连接
/*var PersonSchema = new mongoose.Schema({
  name:String   //定义一个属性name，类型为String
});

// var PersonModel = db.model('Person',PersonSchema);
var PersonModel = db.model('Person',{name: String});

var personEntity = new PersonModel({name:'Krouky'});
//打印这个实体的名字看看
console.log(personEntity); //Krouky

 personEntity.save();*/