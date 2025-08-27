var findTheDifference = function(s, t) {
    let res = 0;
    
    for (let ch of t) {
        res += ch.charCodeAt(0);
    }
    for (let ch of s) {
        res -= ch.charCodeAt(0);
    }
    return String.fromCharCode(res);
};

console.log(findTheDifference("abcd", "abcde")) // Output: "e"
console.log(findTheDifference("", "y")) // Output: "y"
console.log(findTheDifference("a", "aa")) // Output: "a"