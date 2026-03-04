// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array and at least one occurrence of the minimum value of the array.


const A = [2, 6, 1, 6, 9];

// 1. Find overAll min & max
const oMin = Math.min(...A);
const oMax = Math.max(...A);

let output = A.length; // Start with the maximum possible length
let lastMinIdx = -1;
let lastMaxIdx = -1;

// 2. Single pass (O(n))
for (let i = 0; i < A.length; i++) {
    if (A[i] === oMin) lastMinIdx = i;
    if (A[i] === oMax) lastMaxIdx = i;

    // 3. Only calculate if we've seen both at least once
    if (lastMinIdx !== -1 && lastMaxIdx !== -1) {
        let currentLength = Math.abs(lastMinIdx - lastMaxIdx) + 1;
        output = Math.min(output, currentLength);
    }
}

console.log(output);