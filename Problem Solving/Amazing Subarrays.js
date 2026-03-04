// You are given a string S, and you have to find all the amazing substrings of S.
//
//     An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
const A = 'pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn';
const mapping = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true,
    A : true,
    E : true,
    I : true,
    O : true,
    U : true
}
const startIndexes = [];
for(let i=0 ; i< A.length; i++){
    if(mapping[A[i]]){
        startIndexes.push(i);
    }
}
let count = 0;
for(let i=0 ; i<startIndexes.length; i++){
    count += A.length - startIndexes[i];
}
console.log(count%10003);