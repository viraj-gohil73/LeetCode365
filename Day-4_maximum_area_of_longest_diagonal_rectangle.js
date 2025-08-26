var areaOfMaxDiagonal = function(dimensions) {
    let diag_max = 0;
    let max_area = 0;

    for(let i=0;i<dimensions.length;i++)
    {
        let diag_sq = (dimensions[i][0]*dimensions[i][0]) + (dimensions[i][1]*dimensions[i][1])
        let area = dimensions[i][0]*dimensions[i][1]

        if(diag_sq > diag_max){
            diag_max = diag_sq;
            max_area = area;
        }
        else if(diag_sq == diag_max)
        {
            max_area = Math.max(max_area, area)
        }
    }
    return max_area
};

// Example usage:
console.log(areaOfMaxDiagonal([[4,5],[2,3],[1,6],[4,4]])); // Output: 20
console.log(areaOfMaxDiagonal([[2,2],[3,3],[1,4]])); // Output: 9