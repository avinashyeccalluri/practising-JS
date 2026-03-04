
A = [5, -2, 3 , 1, 2]
B = 3
let prefixSum = [...A];
let suffisSum = [...A];
let N = A.length;
for(let i=1 ; i< A.length; i++){
    prefixSum[i] = prefixSum[i-1] + prefixSum[i];
}
for(let i = A.length-2 ; i>=0 ; i--){
    suffisSum[i] = suffisSum[i+1]+suffisSum[i];
}
let oMax = Math.max(prefixSum[B - 1], suffisSum[N - B]);
for(let i = 1 ; i<B ; i++){
    oMax = Math.max(oMax , prefixSum[i-1] + suffisSum[N - (B - i)])
}
console.log(oMax)