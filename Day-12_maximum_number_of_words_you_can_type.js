var canBeTypedWords = function(text, brokenLetters) {
    let broken = new Set(brokenLetters);
    let words = text.split(" ");
    let count = 0;

    for (let word of words) {
        let valid = true;
        for (let ch of word) {
            if (broken.has(ch)) {
                valid = false;
                break;
            }
        }
        if (valid) count++;
    }
    return count;
}; 
console.log(canBeTypedWords("leet code","lt")); // 1
console.log(canBeTypedWords("leet code","e")); // 0
console.log(canBeTypedWords("leet code","l")); // 1