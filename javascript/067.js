/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  let result = '';
  let carry = 0;
  let len = Math.max(a.length, b.length);

  for (let i = 0; i < len; i++) {
    let sum = carry;
    if (i < a.length) sum += a[a.length - 1 - i] - '0';
    if (i < b.length) sum += b[b.length - 1 - i] - '0';
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }

  if (carry) result = carry + result;

  return result;
};

console.log(addBinary('11', '1')); // 100
console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('0', '0')); // 0
