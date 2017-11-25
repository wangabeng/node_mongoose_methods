// mongoose 链接
var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/nasi'); 

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// Schema 结构
var mongooseSchema = new mongoose.Schema({
    username : {type : String, default : '匿名用户'},
    title    : {type : String},
    content  : {type : String},
    time     : {type : Date, default: Date.now},
    age      : {type : Number}
});



// model
var mongooseModel = db.model('wuhan', mongooseSchema);


// 增加记录 基于 entity 操作
var doc = {username : 'emtity_demo_username', title : 'emtity_demo_title', content : 'emtity_demo_content'};

var mongooseEntity = new mongooseModel(doc);
mongooseEntity.save(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    db.close();
});