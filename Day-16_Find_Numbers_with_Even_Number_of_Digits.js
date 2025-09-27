var findNumbers = function(nums) {
    let count = 0;

    for (let num of nums) {
        let digits = Math.floor(Math.log10(num)) + 1;
        if (digits % 2 === 0) {
            count++;
        }
    }
    
    // secound approach
    
    // for (let num of nums) {
    //     let digits = num.toString().length;
    //     if (digits % 2 === 0) {
    //         count++;
    //     }
    // }

    return count;
};

// Example usage:
console.log(findNumbers([12, 345, 2, 6, 7896])); // Output: 2
console.log(findNumbers([555, 901, 482, 1771])); // Output: 1