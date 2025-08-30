var isValid = function(word) {
   if (word.length < 3) return false;

    let vowel = false;
    let con = false;

    for (let i = 0; i < word.length; i++) {
        let ch = word[i];

        if (!/[a-zA-Z0-9]/.test(ch)) return false;
        let lower = ch.toLowerCase();

        if ("aeiou".includes(lower))
        {
            vowel = true;
        } 
        else if(/[a-z]/.test(lower))
        { 
            con = true;
        }
    }
    return vowel && con;
};

//output
console.log(isValid("apple")); // true
console.log(isValid("sky")); // false
console.log(isValid("a1b")); // true
console.log(isValid("a!b")); // false
