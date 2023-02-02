/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 * Difficulty:Easy
 *
 * @param {number} columnNumber   // 參數是數字
 * @return {string}   // 回傳字串
 *
 *
 * 本題重點：求出 columnNumber 相對應的英文字母
 *
 */

// 寫法一
// 必須要注意的是陣列是由 0 開始排列，所以 str 的位置都要減一
var convertToTitle = function (columnNumber) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let remainder,
    result = [];

  // 商數等於 0 的時候就不用繼續算了
  while (columnNumber > 0) {
    remainder = (columnNumber - 1) % 26; // 因為陣列是 0-25，(columnNumber - 1) 可以讓字母直接對應陣列中的位置
    result.unshift(str[remainder]); // 已求出的代表字母，反向推入陣列中
    columnNumber = (columnNumber - 1 - remainder) / 26; // columnNumber 在這裡代表商數，減掉一次已求出的代表字母 remainder ，回圈會繼續跑直到條件結束
  }

  // 把最後的結果變成相接字串回傳
  return result.join("");
};

// 寫法二
// 使用 fromCharCode 轉換字符 （A ~ Z 在 Unicode 編碼中代表數字為 65 ~ 90）
var convertToTitle = function (columnNumber) {
  var character_offset = 64;
  var columnTitle = "";

  while (columnNumber > 0) {
    var remainder = columnNumber % 26 === 0 ? 26 : columnNumber % 26; // 餘數如果是0的話就是位置 26，反之就是餘數的位置
    columnNumber = (columnNumber - remainder) / 26; // 減去上面的餘數，重新計算新的商數
    columnTitle =
      String.fromCharCode(character_offset + remainder) + columnTitle;
    // 使用 fromCharCode 拿到對應編碼的英文字母，使用 += 字串會往後相加，把 columnTitle 放最後字串就可以往前相加。
    console.log(columnTitle);
  }
  return columnTitle;
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(2147483647)); // FXSHRXW
