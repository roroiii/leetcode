/**
 * https://leetcode.com/problems/happy-number/
 * Difficulty:Easy

 */

function getSquares(n) {
  const str = String(n);
  const arr = str.split("");
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * arr[i];
  }
  return result;
}
var isHappy = function (n) {
  const mySet = new Set();
  let result = n;

  while (result !== 1) {
    result = getSquares(result);
    if (mySet.has(result)) return false;
    mySet.add(result);
  }
  if (result === 1) return true;
};

console.log(isHappy(19));
console.log(isHappy(2));
