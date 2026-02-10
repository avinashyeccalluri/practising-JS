function debounce(func, wait){
    let timeId = null;
    return function(...args) {
        console.log(`The args: ${args}`);
        clearTimeout(timeId);
        timeId = setTimeout(()=>{
            func.apply(this, args);
        }, wait);
    }

}
//
// function search(query){
//     console.log(`The query is ${query}`);
// }
//
// const debouncedSearch = debounce(search, 1000);
//
// debouncedSearch('React')


//understanding the callback, ...args, this in detail

function withLogging(func){
    return function(...args) {
        console.log(`Calling ${func.name} with:`, args);
        console.log('the logging has started');
        const result = func.apply(this, args);
        console.log('the logging is completed');
        return result;
    }
}

const multiplication = (a, b)=> a*b;
const multiplicationLogger = withLogging(multiplication);
const result = multiplicationLogger(2,3);
console.log(result);


const user = {
    name : "Avinash",
    greet : function(punc){
        return `Hello ${this.name} ${punc}`
    }
}

const greet1 = user.greet;
const boundGreet = greet1.bind(user, '!');
console.log(boundGreet());

const greet = user.greet('!');
console.log(greet);


console.log(`The max value is `, Math.max(...[1, 5, 10]))


const uniqueValue = Symbol('tempFunc');
console.log(`The value is `, uniqueValue);

//custom apply function basic level

function gre(name, punctuation){
    console.log(`The value is ${name} ${punctuation}`);
}

const self = {
    something : true
}

self.greeting = gre;

console.log(`Custom call function`)
self.greeting('Avinash', '!')

delete self.greeting;


//Custom apply function greet


Function.prototype.myCall = function* (context, ...args) {

    context = context || globalThis;
    const uniqueValue = Symbol('tempFunc');
    context[uniqueValue] = this;
    const result = context[uniqueValue](...args);
    delete context[uniqueValue];
    return result;

}

function helloWorld(){
    console.log(this)
}

helloWorld()