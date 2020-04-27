var express = require('express');
var router = express.Router();

// => api/users 요청이 들어왔을 때
router.get('/', (req, res) => {
    res.status(200).send('users successful');
});

// api/users/login 파일 접근
router.use('/login', require('./login.js'));

// api/users/signup 파일 접근
router.use('/signup', require('./signup.js'));

// 생성한 router 객체를 모듈로 반환
module.exports = router;