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