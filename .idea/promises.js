// The problem the promises solved is that, callback hell.
// getUserData(userId, (useData)=>{
//     getOrders(useData.id, (order)=>{
//         console.log(order);
//     })
// });

const orderPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const success = Math.random() > 0.2;
        if (success) {
            resolve('🍔 Here is your burger!');  // Fulfilled
        } else {
            reject('❌ Sorry, we are out of ingredients');  // Rejected
        }
    },2000)
})

orderPromise.then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err)
})
const fast = new Promise(resolve => setTimeout(() => resolve('Fast!'), 1000));
const medium = new Promise(resolve => setTimeout(() => resolve('Medium!'), 2000));
const slow = new Promise(resolve => setTimeout(() => resolve('Slow!'), 3000));

Promise.all([fast, medium, slow])
    .then((results) => {
        console.log(results);
        // After 3 seconds: ['Fast!', 'Medium!', 'Slow!']
    });

// Types of promise fullfillment. Method, when it resolves, when it rejects.
// Promise.all() - All succeed - Any fails
// Promise.allSettled() - All settle - New rejects
// Promise.race() - First to settle - First to settle
// Promise.any() - First success - All fail

// Common Patterns in Promises
// Pattern 1. Sequential Execution.
// Pattern 2. Retry Logic
// Pattern 3. Timeout Wrapper
//