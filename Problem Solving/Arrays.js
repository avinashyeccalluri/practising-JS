// Find the min and max in JS

const a = [-2, 1, -4, 5, 3];
let min = Infinity;
let max = -Infinity;
for (let i = 0; i < a.length; i++) {
    if(a[i] > max) max = a[i];
    if(a[i] < min) min = a[i];
}

// console.log(min + max)

// Given an array A of N integers and also given two integers B and C.
//     Reverse the elements of the array A within the given inclusive range [B, C].

// Sample Input
// A = [1, 2, 3, 4]
// B = 2
// C = 3

// reverse an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArrayInPlace(arr, left, right) {
    while(left < right){
        const temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;
        right--;

    }
    return arr;
}

// console.log(reverseArrayInPlace(A, 2, 5));

// Array Rotation based on the steps given

function arrayRotation(arr, B){
    const N = arr.length;
    B = B % N;
    reverseArrayInPlace(arr, 0, N-1);
    reverseArrayInPlace(arr, 0 , B-1);
    reverseArrayInPlace(arr , B , N-1);
    return arr;
}

console.log(arrayRotation(arr , 2));

