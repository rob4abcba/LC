/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    // console.log("right =", right);
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    
};

let s="hijack";
console.log("Before reverseString, s=", s);
reverseString(s);
console.log("After reverseString, s=", s);