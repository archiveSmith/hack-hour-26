/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const sum = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    if (sum.has(arr[i])) return true;
    sum.add(n - arr[i]);
  }
  return false;
}

console.log(twoSum([1, 2, 3, 5], 9));
module.exports = twoSum;
