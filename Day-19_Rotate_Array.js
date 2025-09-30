var rotate = function(nums, k) {
     let n = nums.length;
        k = k % n;
    
    function reverse(left, right) {
        while (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};
//Example usage:
let arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr); // Output: [5,6,7,1,2,3,4]