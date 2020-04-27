/* 텍스트 파일 불러온 후 암호화 하여 텍스트로 저장 */

const fs = require('fs');
const crypto = require('crypto');

// password txt 생성
const data = 'myPassword';

fs.writeFileSync(`실습/file/password.txt`, data), (err, data) => {
    if (err) return console.log(err.message)
    console.log(`password.txt 파일이 잘 만들어 졌어요!`);
}

const pw = fs.readFileSync(`실습/file/password.txt`).toString();
console.log(pw);

// 암호화
function encrypt(salt, password) {

    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err; // 꼭 적어두기
        const hashed = derivedKey.toString('hex');
        console.log('hashed : ', hashed);

        // 암호화 된 텍스트 저장
        fs.writeFile(`실습/file/hashed.txt`, hashed, (err) => {
            if (err) return console.log(err.message);
            console.log(`${hashed}가 저장되었습니다.`);
        });
    });

}

const salt = crypto.randomBytes(32).toString('hex');
encrypt(salt, pw);