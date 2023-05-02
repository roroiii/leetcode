/**
 * https://leetcode.com/problems/two-sum/description/
 * Difficulty:Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length - 1; j++) {
      sum = nums[i] + nums[j];
      if (sum === Number(target) && i !== j) {
        return [i, j];
      }
    }
  }
};

const twoSum2 = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const sum1 = target - nums[i];

    if (map[sum1] !== undefined) {
      return [map[sum1], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

const twoSum3 = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 11, 15, 7], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 26));
console.log(twoSum2([2, 7, 11, 15], 26));
