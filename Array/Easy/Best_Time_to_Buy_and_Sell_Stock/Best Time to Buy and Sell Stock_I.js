/*
        You are given an array prices where prices[i] is the price of a given stock on the i^th day.
        You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
        Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

        Example 1:
                Input: prices = [7,1,5,3,6,4]
                Output: 5
                Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
                Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
        
        Example 2:
                Input: prices = [7,6,4,3,1]
                Output: 0
                Explanation: In this case, no transactions are done and the max profit = 0.

        Constraints:
                1) 1 <= prices.length <= 10^5
                2) 0 <= prices[i] <= 10^4
*/

function greedySearchFindMaxProfit( prices, index ) {
        let max = prices[index];
        let j = index;
        for( let i = index + 1; i < prices.length; i++ ){
                if( prices[i] > max ) {
                        max = prices[i];
                        j = i;
                } 
        }
        return j;
}

function removeConsecutiveDuplicates( prices ) {
        for( let i = prices.length - 1; i > 0; i-- ) {
                if( prices[ i ] == prices[ i - 1 ] ) {
                        prices.splice( i, 1 );
                }
        }
}

var maxProfit = function( prices ) 
{
        removeConsecutiveDuplicates( prices );
        
        let max = 0;
        let data = -1;
        let maxElementIndexes = -1;
        
        for( let i = 0; i < prices.length-1; i++ ) { 
                if( i == 0 || maxElementIndexes == i ) {
                        maxElementIndexes = greedySearchFindMaxProfit(prices, i+1);
                        data = prices[maxElementIndexes];
                }
                let diff = data - prices[i];
                if( diff > max ) {
                        max = diff;
                }
        }
        
        return max;
};