// Akash likes playing with strings. One day he thought of applying following operations on the string in the given order:
//
//     Concatenate the string with itself.
//     Delete all the uppercase letters.
//     Replace each vowel with '#'.
//     You are given a string A of size N consisting of lowercase and uppercase alphabets. Return the resultant string after applying the above operations.
//
//     NOTE: 'a' , 'e' , 'i' , 'o' , 'u' are defined as vowels.

const input = "AbcaZeoB";
let output = "";

for (let i = 0; i < input.length; i++) {
    const char = input[i].charCodeAt(0);
    console.log(char);
    if(['a', 'e', 'i', 'o', 'u'].includes(input[i])) {
        output+='#'
    }
    else if((char>= 97 && char<=122)){
        output+=input[i]
    }
}

console.log(output+output);

console.log('A'.charCodeAt(0))
console.log('a'.charCodeAt(0))