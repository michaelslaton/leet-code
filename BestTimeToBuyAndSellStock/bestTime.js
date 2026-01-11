const maxProfit = (prices) => {
 let currentMin = prices[0];
 let currentMax = 0;

 for(let i=1;i<prices.length;i++){
  currentMin = Math.min(prices[i], currentMin);
  currentMax = Math.max(currentMax, prices[i] - currentMin);
 }

 return currentMax
};

maxProfit([7,1,5,3,6,4]);