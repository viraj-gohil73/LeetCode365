var compareVersion = function(v1, v2) {
    let arr = v1.split(".");
    let arr2 = v2.split(".");
    
    let n = Math.max(arr.length,arr2.length);
    for(let i=0;i<n;i++)
    {
        let num1 = i < arr.length ? parseInt(arr[i]) : 0;
        let num2 = i < arr2.length ? parseInt(arr2[i]) : 0;
        if(num1 > num2)
        {
            return 1;
        }
        else if(num1 < num2)
        {
            return -1;
        }
    }
    return 0;
};

console.log(compareVersion("1","1.0.0")) // 0
console.log(compareVersion("1.0.1","1")) // 1
console.log(compareVersion("1.01","1.001")) // 0
console.log(compareVersion("1.10","1.2")) // 1
console.log(compareVersion("1.0","1.0.0")) // 0