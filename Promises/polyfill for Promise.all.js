Promise.myAll = function (promises) {
    return new Promise(function (resolve, reject) {
        if (promises.length === 0) {
            return resolve([]);
        }
        let count = 0;
        let result = [];
        promises.forEach((promise, index)=>{
            Promise.resolve(promise).then((data)=>{
                result[index] = data;
            }).catch(err=>{
                // result[index] = { status : 'rejected' , reason : err};
                reject(err);
            }).finally(()=>{
                count++;
                if(count === promises.length){
                    resolve(result);
                }
            })
        })
    })
}

const p1 =  Promise.resolve('Resolved Result');
const p2 =  Promise.resolve('Resolved Result');
// const p3 =  Promise.reject('Rejected Result');
const p4 =  Promise.resolve('Resolved Result');

Promise.myAll([p1, p2,p4]).then(results => {
    console.log(results);
}).catch(err=>{
    console.log(err);
})
