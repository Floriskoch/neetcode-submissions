class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // prices are sorted by date
        // loop through prices, with an additional loop that checks the remaining ones
        // store the highest difference, start at 0

        let maxProfit = 0

        for (let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i]

            // loop through remainder
            for (let j = i + 1; j < prices.length; j++) {
                let futurePrice = prices[j]
                let profit = futurePrice - currentPrice

                if (profit > 0 && profit > maxProfit) {
                    maxProfit = profit
                }
            }
        }

        return maxProfit
    }
}
