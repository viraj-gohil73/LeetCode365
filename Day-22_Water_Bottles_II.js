var numWaterBottles = function(numBottles, numExchange) {
    // total drunk starts with all initial bottles
    let drink = numBottles; 
    while(numBottles>=numExchange)
    {
        // spend empties to get 1 new full bottle
        numBottles-=numExchange;
        // drink that new bottle → 1 empty comes back
        numBottles++;
        // exchange rate becomes harder
        numExchange++;
        // count the drunk bottle
        drink++;
    }
    
    return drink;
};

// Example usage:
console.log(numWaterBottles(13, 6)); // 15
console.log(numWaterBottles(1, 2)); // 1
console.log(numWaterBottles(10, 3)); // 13