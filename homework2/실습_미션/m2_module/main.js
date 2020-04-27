/* 모듈 기본 실습 */

// 1) 함수 사용
//const sum = require('./sum')
//var result = sum(1, 3);

// 2) 객체 사용
const sumModule = require('./sum')
var result = sumModule.sum(1, 3);

console.log(result); // 4


/* 모듈 미션 - 계산기 */

const calculator = require('./calculator')

console.log('add : ' + calculator.add(5, 1));
console.log('subtract : ' + calculator.subtract(5, 1));
console.log('multiply : ' + calculator.multiply(5, 1));
console.log('divide : ' + calculator.divide(5, 1));
console.log('divide with 0 : ' + calculator.divide(5, 0));