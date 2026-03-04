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

// console.log(arrayRotation(arr , 2));

// Curried Fuctions

const log = (logType)=> (message)=> console.log(`[${logType}] -  ${message}`);

const info = log('Info');

info('The info is completed');
console.log('=======================Print Sub arrays start=================================')


function printAllSUbArray(arr){
    let maxSum = -Infinity;
    for(let i=0; i< arr.length;i++){
        for(let j=i ; j <arr.length;j++){
            let subArray = [];
            let sum = 0;
            for(let k = i ; k <=j ; k++){
                subArray.push(arr[k]);
                sum+=arr[k];
                console.log(`the sum is ${sum}`);
            }
            maxSum = Math.max(maxSum, sum);
            console.log(subArray);
        }
    }
    console.log('The max sum is -> ', maxSum);
    console.log('The max  -> ', maxSum);
}

printAllSUbArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);



console.log('=======================Print Sub arrays end=================================')
console.log('=======================Print Sub arrays kadane Algo start=================================')

function kadaneAlgo(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    for(const num of arr){
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        if(currentSum <0 ){
            currentSum = 0;
        }
    }
    return maxSum

}

console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


console.log('=======================Print Sub arrays kadane Algo  end=================================');
console.log('=======================Print Sub arrays kadane Algo 1.0  start=================================')

function kadaneAlgoone(arr){
    let currentSum =  arr[0];
     let maxSum = arr[0];
     for(let i =1; i < arr.length;i++){
         const num = arr[i];
         currentSum = Math.max( num, num + currentSum);
         maxSum = Math.max( maxSum, currentSum );
     }
     return maxSum;
}

console.log(kadaneAlgoone([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log('=======================Print Sub arrays kadane Algo 1.0  start=================================')
console.log('================================ Print maxSubArrayWithIndices Start     =======================================');

function maxSubArrayWithIndices(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    let start = 0; let end = 0;
    let tempIndex = 0;
    for(let i =1; i< arr.length;i++){
        const num = arr[i];
    //     Scenarios's
    //     1. currentSum + num  < currentSum start the new Index
    //     2. currentSum + num  > currentSum Include in the continuous Array
        if(currentSum + num < num){
            tempIndex = i;
            currentSum = num;
        }
        else{
            currentSum = currentSum + num;
        }

        if(currentSum > maxSum ){
            maxSum = currentSum;
            start = tempIndex;
            end = i
        }
    }
    return {
        maxSum,
        subarray: arr.slice(start, end + 1),
        start,
        end
    };
}
const result = maxSubArrayWithIndices([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);

console.log('================================ Print maxSubArrayWithIndices end     =======================================');

// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

const A = [1, 1, 1];
const oddPrefix = [...A];
const evenPrefix = [...A];
oddPrefix[0] = 0;
for(let i=1; i< A.length; i++){
    if(i%2 === 0){
        evenPrefix[i] = evenPrefix[i-1] + evenPrefix[i];
        oddPrefix[i] = oddPrefix[i-1];
    }
    else{

        oddPrefix[i] = oddPrefix[i-1] + oddPrefix[i];
        evenPrefix[i] = evenPrefix[i-1];
    }
}
 function specialIndices(A, evenPrefix, oddPrefix){
    let count = 0;
    let prefixEvenSum = 0;
    let prefixOddSum = 0;
    const N = A.length;;
    for(let i=0 ; i<A.length;i++){
        prefixEvenSum = oddPrefix[N-1] - oddPrefix[i];
        prefixOddSum = evenPrefix[N-1] - evenPrefix[i];
        if(i !== 0){
            prefixEvenSum+= evenPrefix[i-1];
            prefixOddSum+= oddPrefix[i-1];
        }
        if(prefixEvenSum === prefixOddSum){
                count++;
        }
    }
    return count;
 }

console.log(specialIndices([1,1,1], evenPrefix, oddPrefix))



