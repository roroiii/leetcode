/**
 * https://leetcode.com/problems/missing-number/description/
 * Difficulty:Easy

 */

// 第一種
var missingNumber1 = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  if (Number(arr[0]) !== 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) + 1 === Number(arr[i + 1])) {
    } else if (Number(arr[i + 1]) !== undefined) {
      return Number(arr[i] + 1);
    }
  }
};

// 第二種
var missingNumber2 = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  if (Number(arr[0]) !== 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (i !== Number(arr[i])) {
      return i;
    }
  }
  return arr.length;
};

// 第三種 (利用總和相減)
// i   ： 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// arr :  1 + 2 + 3 + 4 + _ + 6 + 7 + 8 + 9 + 10 = 50
var missingNumber3 = function (nums) {
  let result = 0;
  let sum_i = 0;
  let sum_nums = 0;

  // nums.length 是最後一個數字
  for (let i = 0; i < nums.length + 1; i++) {
    sum_i += i;
    if (nums[i] !== undefined) sum_nums += nums[i]; // undefined 就不相加，或是可以最後再加上最後一個數字(nums.length)
  }
  result = sum_i - sum_nums;
};

// 第四種好玩的解法
// (xor位元運算，開關電燈的概念，電燈按兩次會回到原本的狀態，如果沒回到原本的狀態的數字就是答案)
var missingNumber4 = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    result = result ^ i ^ nums[i]; // xor
  }
  console.log(result);
  return result;
};

missingNumber([3, 0, 1]); // 2
missingNumber([0, 1]); // 2
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]); // 8
missingNumber([
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
]); // 18
