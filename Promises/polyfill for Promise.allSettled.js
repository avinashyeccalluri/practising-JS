Promise.myAllSettled = function (promises) {
    return new Promise(resolve => {
        if (promises.length === 0) {
            return resolve([]);
        }
        let count = 0;
        let results = [];
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((data) => {
                results[index] = {status: 'resolved', data};

            }).catch((reason) => {
                results[index] = {status: 'rejected', reason};
            }).finally(() => {
                count++;
                if (count === promises.length) {
                    resolve(results);
                }
            })
        })


    })
}

const p1 = Promise.resolve('Avinash');
const p2 = Promise.reject('Rejected Avinash');
const p3 = "Avinash";

Promise.myAllSettled([p1, p2, p3]).then(results => {
    console.log(results);
})