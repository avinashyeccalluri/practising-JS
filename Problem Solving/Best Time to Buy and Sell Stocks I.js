// Say you have an array, A, for which the ith element is the price of a given stock on day i.
//  If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//
//     Return the maximum possible profit.

const A = [1, 4, 5, 2, 4];
let minPrice = Infinity;
let maxProfit = 0;
for(let i=0; i<A.length; i++){
    if(A[i] < minPrice){
        minPrice = A[i];
    }
    else if(A[i] - minPrice > maxProfit){
        maxProfit = A[i] - minPrice;
    }
}
console.log(maxProfit);