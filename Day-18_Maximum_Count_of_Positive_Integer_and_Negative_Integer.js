var maximumCount = function(nums) {
    function lowerbound(nums,target){
        let left = 0;
        let right = nums.length;

        while(left<right)
        {
            let mid = Math.floor((left+right)/2)
            if(nums[mid]>= target)
            {
                right=mid
            }
            else{
                left=mid+1
            }
        }
        return left
    }

    return Math.max(lowerbound(nums,0),nums.length - lowerbound(nums,1))
};

// Example usage:
console.log(maximumCount([-2,-1,-1,1,2,3])); // Output: 3
console.log(maximumCount([-3,-2,-1,0,0,1,2])); // Output: 3