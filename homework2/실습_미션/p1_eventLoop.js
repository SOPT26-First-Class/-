/* setTimeout - Event Loop */

/* setTimeout ( callback func, ms, [arg ... ] )
특정시간 후 (ms) 에 콜백 함수를 한번 실행
함수가 즉시 실행하지 않고 특정 시간에 실행되길 결정할 수 있음 */

function greet() {
    console.log('Hi')
}

function timer() { // 콜 스택 -> 백그라운드 -> 콜백 큐 -> 콜 스택
    return setTimeout(() => {
        console.log('End')
    }, 3000)
}

greet()
timer()
// 'Hi' 3초 뒤 'End'
//-------------------------------------------------------

/* 비동기 - 요청을 하고 바로 제어권을 돌려 받는 방식
Node.js에서 대부분을 비동기로 실행 어떤 작업이 먼저 끝날지 모름 */

function task1() {
    setTimeout(() => {
        console.log('1')
    }, 0)
}

function task2() {
    console.log('2')
}

function task3() {
    console.log('3')
}

task1()
task2()
task3()
// 2 - 3 - 1