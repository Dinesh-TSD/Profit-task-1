const maxProfit = (n, prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    prices.slice(0, n).forEach(price => {
        if (price < minPrice) {
            minPrice = price;  
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;  
        }
    });

    return maxProfit;
};

// Input
let n = parseInt(prompt("Enter the number of days:"));  
let prices = prompt(`Enter the prices for ${n} days:`).split(' ').map(Number);

// Output
console.log(maxProfit(n, prices));
