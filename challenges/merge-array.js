/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  let sortedArray = [];
  let count1 = 0;
  let count2 = 0;

  while (arr1[count1] && arr2[count2]) {
    if (arr1[count1] < arr2[count2]) {
      sortedArray.push(arr1[count1]);
      count1 += 1;
    } else {
      sortedArray.push(arr2[count2]);
      count2 += 1;
    }
  }
  if (arr1[count1] === undefined) {
    sortedArray.concat(arr2.slice(count2));
  }
  if (arr2[count2] === undefined) {
    sortedArray = sortedArray.concat(arr1.slice(count1));
  }
  return sortedArray;
}
let my_array = [3, 4, 6, 10, 11, 15, 21];
let another_array = [1, 5, 8, 12, 14, 19];

console.log('result', mergeArrays(my_array, another_array));

module.exports = mergeArrays;
