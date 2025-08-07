function filterByPrice(prices, minimumPrice) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= minimumPrice) {
      result.push(prices[i]);
    }
  }
  return result;
}

let prices = [10, 25, 8, 42, 15, 5];
console.log(filterByPrice(prices, 20));
