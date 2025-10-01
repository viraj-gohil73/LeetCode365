var triangularSum = function(nums) {
if(nums.length == 1) return nums[0];

let n = nums.length;
    while (n > 1) {
        let arr = [];
        for (let j = 0; j < nums.length - 1; j++) {
            nums[j] = (nums[j] + nums[j+1]) % 10
        }
        nums.pop()
        n--
    }
    return nums[0];
};

console.log(triangularSum([1,2,3,4,5])); // Output: 8
console.log(triangularSum([5])); // Output: 5
console.log(triangularSum([3,7,4,2,4])); // Output: 7