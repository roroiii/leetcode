/**
 * 2634. Filter Elements from Array
 * Difficulty:Easy
 *
 * Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
 * The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
 * Please solve it without the built-in Array.filter method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i]);
  }
  return result;
};

// prettier-ignore
console.log(filter(arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }))
// prettier-ignore
console.log(filter(arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }))
// prettier-ignore
console.log(filter(arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }))
