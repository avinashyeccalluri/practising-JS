const input  = "this is ib";
const sample = input.split(" ");
const N  = sample.length;
for (let i = 0; i < sample.length/2; i++) {
    let temp = sample[i];
    sample[i] = sample[N-1-i];
    sample[N-1-i] = temp;
}
console.log(sample.join(' '));

const output1 = input.split(" ").reverse().join(" ");

console.log(output1);