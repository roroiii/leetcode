/**
 * Discuss: https://leetcode.com/discuss/study-guide/3458761/Day-18-30-Days-of-LC-JavaScript-Challenge
 * https://leetcode.com/problems/convert-object-to-json-string/?utm_campaign=PostD18&utm_medium=Post&utm_source=Post&gio_link_id=GPnkNmWo
 * Difficulty:Medium

Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.
 */

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) return 'null';
  if (object === true) return true;
  if (typeof object === 'string') return `"${object}"`;
  if (typeof object === 'number' || typeof object === 'boolean') return object.toString();
  if (Array.isArray(object)) {
    let jsonArray = object.map((element) => jsonStringify(element));
    return `[${jsonArray.join(',')}]`;
  }
  if (typeof object === 'object') {
    let jsonObject = Object.keys(object).map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${jsonObject.join(',')}}`;
  }
};

console.log(jsonStringify((object = { a: 'str', b: -12, c: true, d: null })));
console.log(jsonStringify((object = { key: { a: 1, b: [{}, null, 'Hello'] } })));
console.log(jsonStringify((object = true)));
