const input = "racecarannalevel";

let maxPalindromString = '';
for(let j = 0; j < input.length; j++) {

    let oddPalindromeCheck = extend(input, j-1, j+1);
    let evenPalindromeCheck = extend(input, j , j+1);
    // Think of this function like a rubber band stretching outward from the center.
    // check for odd length string
    if(oddPalindromeCheck.length > maxPalindromString.length){
        maxPalindromString = oddPalindromeCheck;
    }
    // check for even length string
    if(evenPalindromeCheck.length > maxPalindromString.length){
        maxPalindromString = oddPalindromeCheck;
    }
}

console.log(maxPalindromString);
function extend(string, left, right){

    while(left>=0 && right <string.length){
        if(string[left] === string[right]){
            left--;
            right++
        }
        else{
            break;
        }
    }
    return string.substring(left+1 , right);
}