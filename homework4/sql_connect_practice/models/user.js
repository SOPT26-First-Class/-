const pool = require('../modules/pool');
const crypto = require('crypto');
const table = 'user';

const user = {
    signup: async (id, name, password, salt, email) => {
        const fields = 'id, name, password, salt, email';
        const questions = `?, ?, ?, ?, ?`;
        const values = [id, name, password, salt, email];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        try {
            const result = await pool.queryParamArr(query, values);
            // console.log(result) 객체 반환, 데이터 삽입 실패시 -1 뜨는듯
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    checkUser: async (id) => {
        const query = `SELECT * FROM ${table} WHERE id="${id}"`;
        try {
            const result = await pool.queryParam(query);
            return result.length === 0 ? false : true

        } catch (err) {
            if (err.errno == 1062) {
                console.log('checkUser ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('checkUser ERROR : ', err);
            throw err;
        }
    },
    signin: async (id, password) => {
        const query = `SELECT * FROM ${table} where id="${id}"`;

        try {
            const user = await pool.queryParam(query);
            const hashed = crypto.pbkdf2Sync(password, user[0].salt.toString(), 1, 32, 'sha512').toString('hex');
            return user[0].password === hashed ? true : false

        } catch (err) {
            console.log('signin ERROR : ', err);
            throw err;
        }
    },
    getUserById: async (id) => {
        const query = `SELECT * FROM ${table} where id="${id}"`;

        try {
            const user = await pool.queryParam(query);
            // console.log(user) 배열로 나옴
            return user[0];

        } catch (err) {
            console.log('getUser ERROR : ', err);
            throw err;
        }
    }
}

module.exports = user;