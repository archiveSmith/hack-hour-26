/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    array.sort((a, b) => a[0] > b[0]);
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const curArr = array[i];
        const nextArr = array[i + 1];
        const wrkArr = [];
        if (nextArr && curArr[1] >= nextArr[0]) {
            wrkArr.push(curArr[0], nextArr[1])
            array.splice(nextArr, 1);
        } else {
            wrkArr.push(curArr);
        }
        newArr.push(wrkArr);
    }
    return newArr
}


// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

// mergeRanges(times);

module.exports = mergeRanges;
