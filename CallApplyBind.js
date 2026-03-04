

//Custom apply function greet


Function.prototype.myCall = function* (context, ...args) {

    context = context || globalThis;
    const uniqueValue = Symbol('tempFunc');
    context[uniqueValue] = this;
    const result = context[uniqueValue](...args);
    delete context[uniqueValue];
    return result;

}

const a = {
    name : "Avinash",
    sayName : function(){
        console.log(this.name, ' printed from the obj')
    },
    printThis : function(){
        // This refers to the whole a object.
        console.log('The function reference this')
        console.log(this)
    }

}
// OUTPUT
a.printThis();


function sayName() {
    console.log(this.name);
}
// Problem: calling a function WITHOUT an object
// OUTPUT
// sayName();


//  .call() – “CALL now, with this object”

function greetName(msg) {
    console.log(msg , this.name);
}

const greetingObject = {
    name : "Avinash",
    role : "Developer"
}
// OUTPUT
// greetName.call(greetingObject, "Hello");
// greetName();

function Person(name){
    this.name = name;
    console.log(this.name);
}

function Employee(name, id){
    Person.call(this, name);
    this.id = id;
}
// OUTPUT
// const emp = new Employee("Avinash", '1');

//      -------- Apply
function sum(a, b) {
    console.log(this.prefix, a + b);
}

const obj = { prefix: "Total:" };

// sum.apply(obj, [2, 3]);
// Total: 5

// ✅ Difference from call:
//
//     call → arguments separately
//
// apply → arguments as array

// function greet(msg) {
//     console.log(msg, this.name);
// }
//
// const user = { name: "Avinash" };
//
// const boundGreet = greet.bind(user, "Hello");
//
// boundGreet(); // Hello Avinash


function drive() {
    console.log(this.car);
}

const ram = { car: "BMW" };
const shyam = { car: "Audi" };

const shyamBindDrive = drive.bind(ram);
const shyamCallDrive = drive.call(ram);
console.log(shyamBindDrive);
console.log(shyamCallDrive);


// One-line intuition (INTERVIEW GOLD 🏆)
//
// call → “run now with this”
//
// apply → “run now with this (array args)”
//
// bind → “remember this forever”


const mary = {
    age: 21,
};

const john = {
    age: 42,
};


function ageMultiplier(multiplier){
    return this.age * multiplier;
}

console.log(ageMultiplier.call(mary, 2))



