// function executeFunction(someFunction){
//     console.log('About to start dancing');
//     someFunction();
//     console.log('Finished dancing');
// }
//
// function performingDancing(){
//     console.log(`Performing Dancing`);
// }
//
// executeFunction(performingDancing);

// 1. Define the logic in a reusable function
const sayHello = () => {
    console.log('Hello world test');
};

// 2. Pass the function reference to setTimeout
const timerId = setTimeout(sayHello, 2000);

// 3. Now you can call the function whenever you want!
sayHello();
