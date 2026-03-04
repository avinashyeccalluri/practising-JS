function throttle(func, wait){
    let inThrottle;
    if(!inThrottle){
        return function(...args){
            func.apply(this,...args);
            inThrottle = true;
            setTimeout(function(){
                inThrottle = false;
            }, wait)
        }
    }
}

var a = 10;
function a(){
    console.log('Hello world');
}
// Javascriot runs into two phases creation phase and execution phase
//  During execution phase the functions are hoisted first than the variables hence function is hoisted first followed
//  by variable hence the variable a contains the value of 10 as per the above declaration.
console.log(a)