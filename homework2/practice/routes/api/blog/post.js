var express = require('express');
var router = express.Router();

// => /api/blog/post 요청이 들어왔을 때
router.get('/', (req, res) => {
    res.status(200).send('post successful');
});

// 생성한 router 객체를 모듈로 반환
module.exports = router;