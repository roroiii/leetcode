/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * Difficulty:Medium
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum = nums[i] > currSum + nums[i] ? nums[i] : currSum + nums[i];
    maxSum = maxSum > currSum ? maxSum : currSum;
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
