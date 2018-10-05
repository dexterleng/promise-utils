const axios = require('axios');

const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(seconds), seconds * 1000);
    })
}

// Promise.all
const promiseParallel = (promises) => new Promise((resolve, reject) => {
    const values = new Array(promises.length);
    let completed = 0;
    const handleFulfil = (value, index) => {
        values[index] = value;
        completed += 1;
        if (completed === promises.length) {
            resolve(values);
        }
    }
    promises.forEach((promise, index) => {
        promise
            .then((value) => handleFulfil(value, index))
            .catch((err) => reject(err));
    })
});