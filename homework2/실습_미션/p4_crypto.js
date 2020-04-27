const crypto = require('crypto');

/* crypto.pbkdf2 (password, salt, iterations, keylen, digest, callback)
pbkdf2 (비밀번호, 솔트 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback) */

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err; // 꼭 적어두기
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);
    });
}

const password = 'flower';
const salt = crypto.randomBytes(32).toString('hex');
encrypt(salt, password);