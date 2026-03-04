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

// Key differences between static methods:
    // Promise.all        → ✅✅✅ → resolves | ❌ → rejects immediately
    // Promise.allSettled → ✅✅❌ → always resolves with all results
    // Promise.race       → first settled (✅ or ❌) wins
    // Promise.any        → first ✅ wins | all ❌ → rejects