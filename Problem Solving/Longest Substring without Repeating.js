// https://youtu.be/-zSxTJkcdAo

function longestSubstring(S) {
    let left = 0;
    let maxLength = 0;
    let maxLeft = 0
    const map = new Map();
    for(let i=0; i<S.length;i++){
        const char = S[i];
        if(map.has(char) && map.get(char) >= left){
            left = map.get(char)+1;
        }
        map.set(char, i);
        if(i-left+1 > maxLength){
            maxLength = i-left+1;
            maxLeft = left
        }

    }
    return S.substring(maxLeft, maxLeft+maxLength);
}

// Test
const input = "abcabcbb";
const input2 = "pwwkew";
console.log(longestSubstring(input));

console.log(longestSubstring(input2)); // Output: "wke"