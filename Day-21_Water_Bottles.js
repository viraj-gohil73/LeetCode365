var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles;

    while (numBottles >= numExchange) {
        let drinkBottle = Math.floor(numBottles / numExchange);
        let remain = numBottles % numExchange;
        sum += drinkBottle;
        numBottles = drinkBottle + remain;
    }
    return sum;
};

// Example usage:
console.log(numWaterBottles(9, 3)); // 13
console.log(numWaterBottles(15, 4)); // 19
console.log(numWaterBottles(5, 5)); // 6