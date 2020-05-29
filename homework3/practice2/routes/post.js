var express = require('express');
var router = express.Router();
let Posts = require('../models/post');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

/*  
    postIdx: 0,
    authorId: 'tjdud0123',
    title: '솝트 솝트',
    content: 'tjdud0123@naver.com'
*/

/* 모든 게시글 조회  get : [ /post ] */
router.get('/', function (req, res, next) {
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.ALL_POST, Posts));
});

/* 게시글 고유 id 값을 조회 get :  [ /post/:id ] */
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    // id값이 없으면 - NULL_VALUE
    if (!id) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    // id에 해당하는 게시글이 없다면
    const post = posts.filter(post => post.postIdx === id);
    if (post.length === 0) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
    }

    // 게시글 조회 성공
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_POST, post));
})

/* 게시글 생성 post : [ /post ] */
router.post('/', async (req, res) => {
    const {
        authorId,
        title,
        content
    } = req.body;

    // 데이터 값이 없으면 - NULL_VALUE
    if (!authorId || !title || !content) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    // 게시글 작성 성공
    const postIdx = Posts.length;
    Posts.push({
        postIdx,
        author,
        title,
        content
    });

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_POST, Posts[Posts.length - 1]));
})

/* 게시글 수정 put : [ /post/:id ] */
router.put('/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const {
        authorId,
        title,
        content
    } = req.body;

    //null value check
    if (!id || !authorId || !title || !content) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    // id에 해당하는 게시글이 없다면
    if (Posts.findIndex(it => it.postIdx === id) === -1) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
        return
    }

    const postIdx = id;
    posts[id] = {
        postIdx,
        author,
        title,
        content
    };
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.UPDATE_POST, Posts[id]))
})

/* 게시글 삭제 delete : [ /post/:id ] */
router.delete('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    // id값이 없으면 - NULL_VALUE
    if (!id) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    // id에 해당하는 게시글이 없다면
    if (Posts.findIndex(it => it.postIdx === id) === -1) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
        return
    }

    // id 값 제거
    const nextPosts = posts.filter(it => it.postIdx !== id);
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.DELETE_POST, nextPosts))
})


module.exports = router;