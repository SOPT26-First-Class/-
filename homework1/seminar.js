// 0418 1차 세미나 - 자바스크립트 기초

/*  1. 기본 실습 : var VS let VS const */

// var - function scope
var v; // 초기값 필요없음 
var v = 321; // 변수 재선언 가능
v = 234; // 재할당 가능
console.log("v : ", v);

// let - Block scope (일반적 언어들)
let l; // 초기값 필요없음
//let l = 321; // 재선언 불가 : Identifier 'l' has already been declared
l = 234; // 재할당 가능
console.log("l : ", l);


// const - Block scope
const c; // 초기값 필요 Missing initializer in const declaration //
const c = 321; // 재선언 불가 : Identifier 'c' has already been declared
c = 234; // 재할당 불가
console.log("c : ", c);

//---------------------------------------------------------------------------

/*  2. 범위실습  */

function funcScope() {
    var v1 = 123;
    if (true) {
        var v1 = 123;
        let ll = 'abc';
    }
    console.log('let은 Block Scope, ll : ', ll); // 블락 바깥에서 사용 불가 ; ll is not defined
}
funcScope();
console.log('var은 function Scope, v1 : ', v1); // 함수 바깥에서 변수 사용 불가

//---------------------------------------------------------------------------

/*  3. Array실습  */

var server1 = ["김해리", "손예지", 43, null, true]; // 배열 리터럴
var server2 = Array("신윤재", "유가희", 13); // Array 객체의 생성자, **아래와 차이점 없음
var server3 = new Array("이현주", "조충범", false, undefined); // new 연산자를 이용한 Array 객체 생성

/* + 공식 문서에서는 리터럴 방식을 권장, 
1) 가독성 향상
2) 속도 향상
3) Object나 Array라는 생성자 함수의 Override방지
*/

server1.push(123); // push() 메소드
server2[server2.length] = "뭐 넣지"; // 접근자, length 프로퍼티를 이용 : 좀더 빠름
server3[99] = "server3의 길이는 얼마일까요?"; // 접근자, 특정 인덱스를 지정, 공간이 생김. len: 100됨

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

// 요소접근

// 1) of : str, arr 엘리먼트 하나씩 접근
let str1 = 'server1에는 "';
for (var item of server1) {
    str1 += item + ', ';
}
console.log(str1);

// 2) in : str, arr 엘리먼트 인덱스 접근, 객체 키 접근
let str2 = 'server2에는 "';
for (var item in server2) {
    str2 += server2[item] + ', ';
}
console.log(str2);

// 3) forEach : 콜백함수 등록 가능, 엘리먼트 접근
let str3 = 'server3에는 "';
server3.forEach(item => str3 += item + ', ');
console.log(str3);

//---------------------------------------------------------------------------

/*  4. Function실습  */
// '이름 있는 함수 표현식' 권장

// 함수 선언식 - 호이스팅 영향
function addNum(x, y) {
    console.log(x + y);
}
addNum(2, 3);

// 함수 표현식 - 호이스팅 영향 x ; var, let 관계 없음. 함수를 변수에 할당

var addStr = function (x, y) {
    console.log(x + y);
}
addStr("함수", " 표현식");


// 2.1 화살표 함수 : 익명함수 - 콜백함수에서 간결, this는 상위 스코프 this
var addBool = (x, y) => {
    console.log(x + y);
}
addBool(true, false);

//---------------------------------------------------------------------------

/*  4. Json실습  - 클라이언트와 통신 시 주로 사용 */
// 프로퍼티 - key & value / method

var sopt = {
    name: 'OUR SOPT',
    slogan: 'WE LEAD OUR SOPT',
    part: ['plan', 'design', 'android', 'iOS', 'server'],
    number: 180,
    printName: function () { // 메소드
        console.log('name : ', this.name)
    },
    printNum: function () {
        console.log('number : ', this.number)
    }
};

console.log('typeof sopt : ' + typeof sopt); // -object

// + 와 , 의 차이가 무엇인지 직접 작성하면서 알아보세요 ~.~
console.log('sopt : ' + sopt); // +는 뒤에요소가 스트링화 됨 - sopt : [object Object]
console.log('sopt : ', sopt); // , 는 각각 프린트 함 - sopt : Object {name: "OUR SOPT" ...
console.log('sopt :' + JSON.stringify(sopt)); // 스트링으로 다 바꿈 - opt :{"name":"OUR SOPT"...

sopt.printName(); //  - name :  OUR SOPT
sopt.number = 190; // 값 변경 가능

// Json 배열 실습
var dogs = [{
        name: '식빵',
        family: '웰시코기',
        age: 1,
        weight: 2.14
    },
    {
        name: '콩콩',
        family: '포메라니안',
        age: 3,
        weight: 2.5
    },
    {
        name: '두팔',
        family: '푸들',
        age: 7,
        weight: 3.1
    }
];

console.log('dogs : ' + dogs); // dogs : [object Object],[object Object],[object Object]
console.log('dogs : ', dogs); // dogs : Array(3) [Object, Object, Object]
console.log('dogs :' + JSON.stringify(dogs)); //dogs :[{"name":"식빵","family":...


dogs.forEach(
    dog => console.log(dog.name + '이는 종이 ' + dog.family + '이고, 나이가 ' + dog.age + '세입니다 ~')
);