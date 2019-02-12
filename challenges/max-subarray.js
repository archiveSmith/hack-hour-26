/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    // might have to nest loops, to do this without sorting
    // have a count number, and if it is negative start over
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i+=1 ){
        count += arr[i];
        for(let j = i+1; j < arr.length; j+=1){
            count += arr[j];
            if (count > maxCount) maxCount = count;
        }   
        count = 0;
    }
    return maxCount;
}
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) //-> 18 from [3, 10, -4, 7, 2]
// console.log(maxSubarray([15,20,-5,10])) // -> 40

module.exports = maxSubarray;
