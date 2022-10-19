/**
 * https://leetcode.com/problems/search-insert-position/
 * Difficulty:Easy
 * */

// 線性搜尋法 linear search
var searchInsert1 = function (nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// 二分搜尋法 binary search
var searchInsert2 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) right = middle - 1;
    else if (nums[middle] < target) left = middle + 1;
  }
  return right + 1;
};

console.log(searchInsert1([1, 3, 5, 6], 5));
console.log(searchInsert1([1, 3, 5, 6], 2));
console.log(searchInsert1([1, 3, 5, 6], 7));

console.log(searchInsert2([1, 3, 5, 6], 5));
console.log(searchInsert2([1, 3, 5, 6], 2));
console.log(searchInsert2([1, 3, 5, 6], 7));
