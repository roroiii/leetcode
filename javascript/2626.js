/**
 * 2626. Array Reduce Transformation
 * Difficulty:Easy
 *
 * Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
 * A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
 * If the length of the array is 0, it should return init.
 * Please solve it without using the built-in Array.reduce method.
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;

  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

var reduce2 = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

var reduce3 = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

console.log(
  reduce(
    (nums = [1, 2, 3, 4]),
    (fn = function sum(accum, curr) {
      return accum + curr;
    }),
    (init = 0)
  )
); // 10

console.log(
  reduce(
    (nums = [1, 2, 3, 4]),
    (fn = function sum(accum, curr) {
      return accum + curr * curr;
    }),
    (init = 100)
  )
); //130

console.log(
  reduce(
    (nums = []),
    (fn = function sum(accum, curr) {
      return 0;
    }),
    (init = 25)
  )
); // 25

console.log(
  reduce(
    (nums = []),
    (fn = function sum(accum, curr) {
      return 0;
    }),
    (init = 0)
  )
); // 0
