/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 * Difficulty:Easy

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function (strs) {
  const firstStr = strs[0];
  if (!firstStr) return "";

  let condition = true;
  let count = -1;

  while (condition) {
    count += 1;

    if (count === firstStr.length) {
      condition = false;
    } else {
      condition = strs.every((str) => firstStr[count] === str[count]);
    }
  }
  return firstStr.slice(0, count);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
