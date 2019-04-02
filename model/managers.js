// 引入 Mongoose
let mongoose = require('./connect');

// 定义学生集合数据结构
let managerSchema = mongoose.Schema({
    mid: { // 管理员ID
        type: String,
        trim: true,
        minlength: 1
    },
    username: { // 登录账号
        type: String,
        trim: true,
        minlength: 1
    },
    password: { // 登录密码，6~16 位数字字母，符号只可以使用 “_” 和 “.”。
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 16,
        match: /^[\w_.]{6,16}$/
    }
});

module.exports = mongoose.model('Managers', managerSchema, 'managers');