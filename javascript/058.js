/**
 * https://leetcode.com/problems/length-of-last-word/description/
 * Difficulty:Easy
 * */

var lengthOfLastWord = function (s) {
  strArr = s.split(" ").filter((s) => s !== "");

  return strArr[strArr.length - 1].length;
};

// trim() 會刪除字串前後的空格
// pop() 會回傳最後一個值，也會把最後一個值移除掉。
var lengthOfLastWord2 = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

console.log(lengthOfLastWord2("Hello World"));
console.log(lengthOfLastWord2("   fly me   to   the moon  "));
console.log(lengthOfLastWord2("luffy is still joyboy"));
