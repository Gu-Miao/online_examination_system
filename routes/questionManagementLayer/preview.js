let express = require('express');
let router = express.Router();

// 引入第三方库
let jsonParser = require('body-parser').json();
let app = express();
app.use(jsonParser);

// 引入数据库集合模型
let questionsModel = require('../../model/questions');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('questionManagementLayer/preview');
});

router.post('/', function (req, res, next) {
    questionsModel.find(req.body, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    })
});

module.exports = router;