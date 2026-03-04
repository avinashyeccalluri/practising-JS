console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));
console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));

let input = "Hello";
let output = "";
for(let i=0 ; i<input.length ; i++){
    const currentChar = input[i].charCodeAt(false);
    if(currentChar>=65 && currentChar<=90){
        output+= String.fromCharCode(currentChar + 32);
    }
    else{
        output+= String.fromCharCode(currentChar - 32);
    }
}
console.log(output);