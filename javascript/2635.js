/**
 * Difficulty:Easy
 *
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

// 置換原來的元素
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

// prettier-ignore
console.log(map( (arr = [1, 2, 3]),(fn = function plusone(n) { return n + 1; }))); // [2,3,4]
// prettier-ignore
console.log(map((arr = [1, 2, 3]),(fn = function plusI(n, i) {  return n + i; }))); // [1,3,5]
// prettier-ignore
console.log( map( (arr = [10, 20, 30]), (fn = function constant() {   return 42; }))); // [42,42,42]
