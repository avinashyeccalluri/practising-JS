const A = 5;
const B = 12;
const C = [2, 1, 3, 4, 5];
let result = 0;
let currentSum = 0;
let left = 0;

for (let right = 0; right < A; right++) {
    currentSum += C[right];

    // If the sum exceeds B, shrink the window from the left
    while (currentSum > B && left <= right) {
        currentSum -= C[left];
        left++;
    }

    // Update result if the current window is the best we've seen
    if (currentSum <= B) {
        result = Math.max(result, currentSum);
    }
}

console.log(result);