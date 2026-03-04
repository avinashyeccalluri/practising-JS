const A = 'bobob';
let count = 0;
for(let i =0 ; i<A.length-2; i++){
    if(A[i] === 'b' && i+2 <= A.length-1 && A[i+1] === 'o' && A[i+2] === 'b' ){
        count+=1;
    }
}
console.log(count)