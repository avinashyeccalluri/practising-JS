// Find the min and max in JS

const a = [-2, 1, -4, 5, 3];
let min = Infinity;
let max = -Infinity;
for (let i = 0; i < a.length; i++) {
    if(a[i] > max) max = a[i];
    if(a[i] < min) min = a[i];
}

console.log(min + max) // testing