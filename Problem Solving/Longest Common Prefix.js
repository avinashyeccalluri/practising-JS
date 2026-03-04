const A = ["abcdefgh", "aefghijk", "abcefgh"]
let minLength = A[0].length;
for (let i = 1; i < A.length; i++) {
    if (A[i].length < minLength) minLength = A[i].length;
}
let rightIndex = 0;
let allMatch = true
for (let i = 0; i < minLength; i++) {
    const char = A[0][i];
    for (let j = 0; j < A.length; j++) {
        console.log(A[j][i])
        if (A[j][i] !== char) {
            allMatch = false;
            break;
        }
    }
    if (allMatch) {
        rightIndex = i + 1;
    } else {
        break;
    }

}

console.log(A[0].substring(0, rightIndex))