function solve(A, B, C) {
    let n = A.length;
    let currentSum = 0;

    // 1. Calculate the sum of the first window of size B
    for (let i = 0; i < B; i++) {
        currentSum += A[i];
    }

    // 2. Check the first window
    if (currentSum === C) return 1;

    // 3. Slide the window from index B to the end of the array
    for (let i = B; i < n; i++) {
        // Add current element, subtract the one that is now outside the window
        currentSum = currentSum + A[i] - A[i - B];

        if (currentSum === C) {
            return 1;
        }
    }

    // 4. If no subarray is found after sliding through the whole array
    return 0;
}

// Example Usage:
// A = [4, 3, 2, 6, 1], B = 3, C = 11
// First window (4+3+2) = 9
// Second window (9 + 6 - 4) = 11 -> Match! Returns 1