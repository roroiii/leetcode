/**
 * https://leetcode.com/problems/climbing-stairs/description/
 * Difficulty:Easy
 * */

// 斐波那契数列（Fibonacci）
var climbStairs = function (n) {
  let arr = [0, 1, 2]; // 先有一開始一二三層才可以算得出後面的數字

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
