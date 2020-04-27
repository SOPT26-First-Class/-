var express = require('express');
var router = express.Router();

// => /api 요청이 들어왔을 때
router.get('/', (req, res) => {
    res.status(200).send('api successful');
});

// api/blog 폴더 index로 접근
router.use('/blog', require('./blog'));

// api/users 폴더 index로 접근
router.use('/users', require('./users'));

// 생성한 router 객체를 모듈로 반환
module.exports = router;