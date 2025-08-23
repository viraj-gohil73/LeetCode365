/*
Day-1 
Problem : Integer to Roman [Medium]
*/

var intToRoman = function(num) {
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syb = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let str = '';
    for(let i = 0;i<=12;i++)
    {
        while(num >= val[i]){
            num -= val[i];
            str += syb[i];
        }
    }
    return str
};

// Example usage:
console.log(intToRoman(1994)); // Output: "MCMXCIV"