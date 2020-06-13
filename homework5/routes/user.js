const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

// 회원가입
router.post('/signup', userController.signup);

// 로그인
router.post('/signin', userController.signin);

// 프로필 조회
router.get('/profile/:id', userController.getProfile);


module.exports = router;