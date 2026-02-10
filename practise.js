// const obj = {
//     count: 10,
//     doWork: function() {
//         setTimeout(function() {
//             console.log(this.count); // What happens here?
//         }, 100);
//
//         // (function (){
//         //     console.log('IFFE Invlocation')
//         // }())
//     }
// };
//
// obj.doWork();



// const module = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }.bind(this)
// };
//
// const unboundGetX = module.getX;
// console.log(unboundGetX()); // (1) What is the output?
//
// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());   // (2) What is the output?


// Normal function
const multiply = (a, b) => a * b;

// // Curried function
// const curriedMultiply = (a) => (b) => a * b;
// const curriedMultiplyFunction = function (a){
//     return function (b){
//         return a*b;
//     }
// }
// const triple = curriedMultiplyFunction(3);
// console.log(triple(4), ' The triple value')
// const double = curriedMultiply(2); // Partial application
// // console.log(double(5)); // 10
// // console.log(double(10)); // 20


// 4 main descriptors
// 1. Value
// 2.writable
// 3.enumerable
// 4.configurable

// const desc = {
//     name : "Avinash",
//     role : "admin",
//     age : 5,
//     designation : "senior",
//     location : {
//         state : "Telangana",
//         city : "Secundrabad",
//         language : "Telugu"
//     }
// }

// const car = {brand : "Tesla"};
//
// Object.defineProperty(car , "secretSerial" , {
//     value : "XYZ-123",
//     enumerable : false
// })
//
// console.log(Object.keys(car));
// console.log(car.secretSerial)


// PROXY API

const user = {name : "Avinash"}

// console.log('name' in user);

const userProxy = new Proxy(user, {
    get(target, key){
        if(key in target){
            return target[key];
        }
        return 'The key is not present';
    },
    set(target, key, value){
        if(!(key in target)){
            target[key] = value;
        }
        else{
            return 'The value is already present';
        }
    },
    has(target, key){
        const value = Number(key);
        if (!isNaN(value)) {
            return value >= target.start && value <= target.end;
        }
        return key in target;
    },
    deleteProperty(target, prop) {
        if (prop === "name") {
            console.warn("Permission Denied: Cannot delete the API Key.");
            return false; // Refuse deletion
        }
        delete target[prop];
        return true;
    }
})

// userProxy.age = 5;
// console.log(userProxy.name = 'Kanesh')
// console.log(15 in userProxy);

// delete userProxy.name;


// const api = new Proxy({}, {
//     get(target, prop) {
//         console.log('The prop called is -> ', prop);
//         // We return a function that, when called, returns the property name
//         return () => prop;
//         // return prop;
//         // return;
//         // return prop();
//     }
//
// });

// console.log(api.getUser());    // Output: "getUser"
// console.log(api.deletePost()); // Output: "deletePost"
// console.log(api.whatever());   // Output: "whatever"
// console.log((()=>"Hello World!")())
// const proxyFunctionExecution = {
//     name : "John",
//     printName : function(){
//         console.log(this.name);
//     }
// }
//
// console.log(proxyFunctionExecution.printName);
// (proxyFunctionExecution.printName)()
// call, apply , bind
const obj = {
    name : "Avinash",
    age : 20,
    location : "Vellore",
    role : "Developer",
    description : "Developer Developer",
    designation : "Senior",
    printName : function(){
        console.log('My name is: ' + this.name);
    }
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Object.freeze(obj);
// obj.name = "Kanesh";
// console.log(obj)


// Object.seal(obj);
// obj.name = "Kanesh";
// obj.hobby = 'coding'
// console.log(obj)

// Object.preventExtensions(obj);
// delete obj.description;
// obj.hobby = 'coding'
// console.log(obj)

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(key, value);
// })


// constructor stealing

function SuperTypeStealing(name){
    this.name = name;
    this.colors = ['red', 'green', 'blue'];
}

function SuperType(name, age){
    SuperTypeStealing.call(name);
    this.age = age;
}

const m1 = new SuperTypeStealing("Avinash", 29);
const m2 = new SuperTypeStealing("Developer", 29);
m1.colors.push('orange');
// console.log(m1.colors);
// console.log(m2.colors);


function Player(){
    this.inventory = [];
}

const p1 = new Player();
p1.inventory.push('Sword');
const p2 = new Player();
console.log(p1.inventory);
console.log(p2.inventory);





