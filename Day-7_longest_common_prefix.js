function common(s1, s2) {
    let res = "";
    for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
        if (s1[i] == s2[i]) {
            res += s1[i];
        } else {
            break;
        }
    }
    return res;
}
var longestCommonPrefix = function(strs) {
   let str = strs[0];
    for(let i=1;i<strs.length;i++)
    {
        str = common(str,strs[i]);
    }
    return str;
};
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["ab","a"])); // "a"