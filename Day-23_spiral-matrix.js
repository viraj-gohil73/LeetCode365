function spiralOrder(matrix)
{
    let res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (left <= right && top <= bottom)
    {

        for (let i = left; i <= right; i++)
        {
            res.push(matrix[top][i])

        }
        top++
        for (let i = top; i <= bottom; i++)
        {
            res.push(matrix[i][right])
        }

        right--

        if (top <= bottom) {
            for (let i = right; i >= left; i--)
            {
                res.push(matrix[bottom][i])
            }
            bottom--
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--)
            {
                res.push(matrix[i][left])
            
            }
            left++;
        }
    }
    return res;
}
// Example usage:
console.log(spiralOrder([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30]
])); // output : [1,2,3,4,5,6,12,18,24,30,29,28,27,26,25,19,13,7,8,9,10,11,17,23,22,21,20,14,15,16]