var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length - 1;

    while(i<j)
    {
        if(numbers[i]+numbers[j] == target)
        {
            return [i+1,j+1]
        }
        else if (numbers[i]+numbers[j] < target) {
            i++;  // move left pointer rightwards
        } 
        else {
            j--; // move right pointer leftwards
        }
    }
};

console.log(twoSum([2,7,11,15],9))  // Output: [1,2]
console.log(twoSum([2,3,4],6))     // Output: [1,3]