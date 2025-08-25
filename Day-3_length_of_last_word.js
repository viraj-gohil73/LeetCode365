var lengthOfLastWord = function(s) {
    let str = s
    let len = str.length-1;
    let count =0;

    while(len>=0 && str.charAt(len) == " ")
    {
        len--;
    }

    while(str.charAt(len) != " " && len >=0 )
    {
        count++;
        len--;
    }
    return count;
};
console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6