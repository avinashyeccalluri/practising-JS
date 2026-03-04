const  A = ['S', 'c', 'a', 'l', 'e', 'r', 'A', 'c', 'a', 'd', 'e', 'm', 'y', '2', '0', '2', '0']
let count = 0;
for(let i=0; i <A.length; i++){
    const cc = A[i].charCodeAt(0)
    console.log(cc)
    if((cc >= 65 && cc <= 90) ||  // A-Z
        (cc >= 97 && cc <= 122) || // a-z
        (cc >= 48 && cc <= 57)){
        count++
    }
}
console.log(count)
console.log(count === A.length ? 1 : 0)