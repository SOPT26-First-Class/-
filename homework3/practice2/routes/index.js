var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// 유저 - 로그인 기능
router.use('/user', require('./user'));

// 포스터 - 게시글 기능
router.use('/user', require('./user'));

module.exports = router;