var express = require('express');
var router = express.Router();
let User = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

// 회원가입
router.post('/signup', async (req, res) => {

    // request body에서 데이터 받아오기
    const {
        id,
        name,
        password,
        email
    } = req.body;

    // request data 확인 - 없다면 Null Value 반환
    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    //already ID
    if (User.filter(user => user.id === id).length > 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
    }

    // password salt, hash 값으로 저장

    const salt = await crypto.randomBytes(32).toString('hex');
    const hash = await crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512').toString('hex');

    User.push({
        id,
        name,
        salt,
        hash,
        email
    });

    // 회원가입 성공
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_USER, {
            userId: id
        }));
});

/* 
    ✔️ sign in
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, password
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

// 로그인
router.post('/signin', async (req, res) => {
    // request body에서 데이터 가져오기
    const {
        id,
        password
    } = req.body;

    // request data확인 없다면 NULL_VALUE
    if (!id || !password) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    // 존재하는 아이디인지 확인 없으면 NO-USER
    if (!user) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }

    // user 정보 데려오기
    const user = User.filter(user => user.id === id)[0]
    const passwordHash = await crypto.pbkdf2(password, user.salt.toString(), 1, 32, 'sha512').toString('hex');

    // 비밀번호 확인 - 일치하지 않으면 MISS_MATCH_PW
    if (user.hash !== passwordHash) {
        res.status(statusCode.BAD_REQUEST)
            .send((util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW)));
        return;
    }

    //성공 - LOGIN_SUCCESS
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {
            'userId': id
        }));

});

/* 
    ✔️ get profile
    METHOD : GET
    URI : localhost:3000/user/profile/:id
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User Id, name, email
*/

// 프로필 조회

router.get('/profile/:id', async (req, res) => {

    // request params 에서 데이터 가져오기
    const id = req.params.id;
    const user = User.filter(user => user.id === id)[0]

    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    if (!user) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));

    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, {
        'userID': id
    }));

});


module.exports = router;