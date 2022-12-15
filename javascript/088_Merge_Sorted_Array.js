/**
 * https://leetcode.com/problems/merge-sorted-array/
 * Difficulty:Easy
 * 
 * Merge Sorted Array
 * 本題重點整理：
 * 合併兩個已排序好的陣列，已提供陣列的長度
 * 只能直接更改 nums1 的陣列，不用 return
 * 

Example 1:
  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

  1. 把 nums1 跟 nums2 的最後一個數字作比較 (nums1 的 3 跟 nums2 的 6 比較)
  2. 如果 nums2 的值(6) > nums1 的值(3)，把 nums2 的值(6) 塞到 nums1 陣列的最後面，反之 nums1 的值不動。持續到 n or m = 0
  3. 如果 n = 0，直接結束判斷（表示 nums1 的所有值比 nums2 小）
  4. 如果 m = 0 但 n > 0， nums1 直接等於 nums2
  4. 如果 m = 0，直接把 nums2 塞到 nums1 陣列的最前面

 */

var merge = function (nums1, m, nums2, n) {
  const length = m + n - 1;

  for (let i = length; i >= 0; i--) {
    if (n === 0) {
      nums1 = nums1;
    } else if (nums2[n - 1] >= nums1[m - 1]) {
      nums1[i] = nums2[n - 1];
      n -= 1;
    } else if (m === 0) {
      nums1[i] = nums2[n - 1];
      n -= 1;
    } else if (m === 0 && n > 0) {
      nums1 = nums2;
    } else {
      nums1[i] = nums1[m - 1];
      m -= 1;
    }
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
