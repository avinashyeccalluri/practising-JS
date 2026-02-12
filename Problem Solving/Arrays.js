// Find the min and max in JS

const a = [-2, 1, -4, 5, 3];
let min = Infinity;
let max = -Infinity;
for (let i = 0; i < a.length; i++) {
    if(a[i] > max) max = a[i];
    if(a[i] < min) min = a[i];
}

console.log(min + max) //

// Given an array A of N integers and also given two integers B and C.
//     Reverse the elements of the array A within the given inclusive range [B, C].

// Sample Input
// A = [1, 2, 3, 4]
// B = 2
// C = 3

// reverse an array

// Array Rotation

