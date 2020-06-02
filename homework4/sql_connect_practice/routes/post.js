const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');

/*  
    postIdx: 0,
    authorId: 'tjdud0123',
    title: '솝트 솝트',
    content: 'tjdud0123@naver.com'
*/

/* 모든 게시글 조회  get : [ /post ] */
router.get('/', async (req, res, next) => {
    const Posts = await Post.getAll()
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
    const post = await Post.getPostById(id)
    if (post.length === 0) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
    }

    // 게시글 조회 성공
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_POST, post[0]));
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

    // Post 생성
    const idx = await Post.create(authorId, title, content);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    // 게시물 작성 성공
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_POST, {
            authorId: authorId,
            title: title,
            content: content
        }));

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
    const post = await Post.getPostById(id)
    if (post.length === 0) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
    }

    const idx = await Post.update(id, authorId, title, content)
    // 수정 실패
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }

    // 수정된 게시글 불러오기
    const newPost = await Post.getPostById(id);

    if (post.length === 0) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
    }
    // 게시글 수정 성공
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.UPDATE_POST, newPost[0]))
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
    const post = await Post.getPostById(id)
    if (post.length === 0) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_POST_IDX));
    }

    // Post 삭제
    const idx = await Post.delete(id);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    // 게시물 삭제 성공
    const Posts = await Post.getAll()
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.DELETE_POST, Posts))
})


module.exports = router;