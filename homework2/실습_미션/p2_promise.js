const func1 = (param) => { // resolve 반환
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('func1 return resolved');
            resolved(`func 1 success: ${param}`);
        }, 500);
    });
}

const func2 = (param) => { // rejected 반환
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('func2 return rejected');
            rejected(new Error(`func2 param: '${param}'`));
        }, 500);
    });
}

const func3 = (param) => { // resolve 반환
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('func3 return resolved');
            resolved(`func 3 success: ${param}\n`);
        }, 500);
    });
}

const func4 = (param) => { // rejected 반환
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('func4 return rejected', param);
            rejected(Error(`func 4 error: ${param}\n`));
        }, 500);
    });
}

const func5 = (param) => { // resolve 반환
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('func5 return resolved');
            resolved(`func 5 success: ${param}\n`);
        }, 500);
    });
}

const promise = func1('sopt') //func1 return resolved

/*
    .then(func2) 은
    .then((result) => func2(result)) 와 동일
*/
promise // param : func 1 success: sopt
    .then(func2) // func2 return rejected 
    .then(func3) // jump
    .catch(console.error) // errorhandler1 => Error: func2 param: 'func 1 success: sopt'
    .then(func4) // func4 return rejected , param : undefined - resolve 된게 없어서
    .then(func5) // jump
    .catch(console.error) // errorhandler2 => Error: func 4 error: undefined
    .then((result) => console.log(result)); //undefined