// Non-recursive (normal) function
function sayHello() {
    console.log("Hello");
    // Function ends here
}
sayHello()
// Recursive function
function sayHelloRecursive() {
    console.log("Hello");
    sayHelloRecursive();  // ← Calls itself!
}
// This condition will run for ever and will case stack overflow
// Each Recursion will have 2 conditions and it has to be followed for ever.
// 1. Base condition
// 2 Recursive Condition
// function recursiveFunction() {
//     // 1. BASE CASE - When to STOP
//     if (/* some condition */) {
//         return /* something */;
//     }
//
//     // 2. RECURSIVE CASE - Call itself with smaller problem
//     return recursiveFunction(/* smaller problem */);
// }
// sayHelloRecursive()

function countDownLoop(n){
    for (let i = 5; i >=0; i--){
        console.log(`the count down ${i}`);
    }
    console.log('Done !')
}

// countDownLoop(5)

function countDownRecursive(n){
    // 1. Base condition
    if(n < 0){

        console.log('Done !');
        return
    }
    // 2. Recursive condition
    console.log(`the count down ${n}`);
    countDownRecursive(n-1)
}

countDownRecursive(5)

function recursiveSum(n){
    // 1. Base condition
    if(n === 0){
        return 0;
    }

    // 2. Recursive Condition
    return n + recursiveSum(n - 1);
}

console.log('recursiveSum');
console.log(recursiveSum(5));


function recursiveFactorial(n){

    if(n===0){
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

console.log('recursiveFactorial');
console.log(recursiveFactorial(5));

// Every recursive function follows this pattern:
// function recursiveFunction(problem) {
//     // 1. BASE CASE - Simplest version
//     if (problemIsSimplestVersion) {
//         return simpleAnswer;
//     }
//
//     // 2. Make problem smaller
//     const smallerProblem = makeProblemSmaller(problem);
//
//     // 3. Trust the recursion (this is key!)
//     const smallerSolution = recursiveFunction(smallerProblem);
//
//     // 4. Use smaller solution to solve bigger problem
//     return combineSolutions(problem, smallerSolution);
// }

function power(n, x){
    if(x === 0){
        return 1;
    }

    return n * power(n , x-1);
}

console.log(power(2,3));

function printStringLength(string){
    if(string === ''){
        return 0
    }

    return 1 + printStringLength(string.slice(1));
}

console.log('String length')
console.log(printStringLength('Avinash'));

function reverseStringRecursive(string){
    if(string === '') return "";
    return reverseStringRecursive(string.slice(1)) + string[0];
}

console.log(reverseStringRecursive('Avinash'))

// check if a string is palindrome


function palindrome(string){
    if(string.length=== 0 || string.length === 1) return true;

    if(string[0] !== string[string.length-1]){
        return false;
    }

    return palindrome(string.slice(1,-1));
}

console.log('palindrome validation');
console.log(palindrome('avinava'))

console.log('Flattening an array using recursion');
function flatten(value){
    let result = [];
    for(let i= 0 ; i< value.length; i++){
        if(!Array.isArray(value[i])){
            result.push(value[i]);
        }
        else{
            const flattedArray = flatten(value[i]);
            result.push(...flattedArray);
        }
    }
    return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6]], 7]));