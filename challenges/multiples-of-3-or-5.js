'use strict';
// If we list all the natural numbers (the positive integers (whole numbers) 1, 2, 3, etc., and sometimes zero as well)
// below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(){
  let sum = 0;
  for (let i = 0; i < 1000; i += 1){
    if( i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  console.log("The sum is; ", sum);
  return sum;
};



// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for (let j = 0; j < z; j += 1){
    if ( j % x === 0 || j % y === 0){
      sum += j;
    }
  }
  console.log("Dynamic sum is: ", sum)
  return sum;
}

// Test your code
sumMultiples3Or5Below1000();
sumMultiplesXOrYBelowZ(3, 5, 1000);

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
