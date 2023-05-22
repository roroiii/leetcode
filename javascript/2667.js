/**
 * https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR
 * Difficulty:Easy

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return () => 'Hello World';
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
