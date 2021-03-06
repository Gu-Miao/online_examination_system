// 引入 express
let express = require('express');
let router = express.Router();

// 引入第三方库
let jsonParser = require('body-parser').json();
let app = express();
app.use(jsonParser);

// 引入数据库集合模型
let questionsModel = require('../model/questions');

router.get('/', function (req, res, next) {
    res.render('questionManagement');
});

router.post('/', function (req, res, next) {
    var reqData = JSON.parse(JSON.stringify(req.body));
    console.log(reqData)
    if (reqData.search) {
        reqData = JSON.parse(reqData.search);
        console.log(reqData)
    }

    questionsModel.find(reqData, (err, docs) => {
        if (err) {
            console.log('err: ', err);
        } else {
            console.log(docs);
            res.json(docs);
        }
    });
});

router.delete('/', function (req, res, next) {
    questionsModel.deleteOne({ qid: req.body.qid }, (err, docs) => {
        if (err) {
            throw err;
        } else {
            console.log(docs);
            res.json(docs);
        }
    });
});

module.exports = router;