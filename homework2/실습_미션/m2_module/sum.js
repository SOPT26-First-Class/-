// 함수 사용
function sum(a, b) {
    return a + b;
}
//module.exports = sum;

// 객체 사용
module.exports = {
    sum: (a, b) => {
        return a + b;
    }
}