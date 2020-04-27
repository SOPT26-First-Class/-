let isMomHappy = true;
let phone = {
    brand: 'Samsung',
    color: 'skyBlue'
}

var willGetNewPhone = new Promise((resolved, rejected) => {

    if (isMomHappy) {
        resolved(phone);
    } else {
        rejected(new Error('mom is not happy'));
    }

})
willGetNewPhone
    .then((phone) => console.log(phone))
    .catch(console.Error); //UnhandledPromiseRejectionWarning: Error: mom is not happy