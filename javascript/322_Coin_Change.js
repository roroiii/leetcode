/**
 * https://leetcode.com/problems/coin-change/description/
 * Difficulty:Medium

  solution tips:
    youtube 觀念教學：Coin Change - Dynamic Programming Bottom Up - Leetcode 322 (https://youtu.be/H9bfqozjoqs)

    ## Dynamic Programming (動態規則) 觀念：(https://web.ntnu.edu.tw/~algo/DynamicProgramming.html)

    ## Greedy algorithm 貪婪演算法
    - ex: 換錢(先換大張紙鈔，換完才換小的硬幣。)
    - ex: 空間租借（相同時間內租借最多人）

   

    ## Depth-First Search(DFS) 深度優先搜尋
    - 是 Backtracking (回溯法) 的型態之一  觀念：Backtracking 回溯法 (https://haogroot.com/2020/09/21/backtracking-leetcode/)

    DP - Top-down and Bottom-up 觀念：【筆記】DP：Top-down vs. Bottom-up (https://yuihuang.com/dp-top-down-vs-bottom-up/)
 */

var coinChange = function (coins, amount) {
  const table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      if (coin <= i) {
        let index = i - coin;
        let potentialAmount = table[index] + 1;
        table[i] = Math.min(potentialAmount, table[i]);
      }
    }
  }
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
