function addStrings(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, carry = 0;
    let result = "";
    
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += num1[i--] - '0';  // convert char to digit
        if (j >= 0) sum += num2[j--] - '0';

        result = (sum % 10) + result;        
        carry = Math.floor(sum / 10);       
    }
    return result;
}

console.log(addStrings("123", "829"));  // Output: "952"