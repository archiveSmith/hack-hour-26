// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5,
// and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  let int = 0;
  const output = [];
  for (let i = 1; i < num + 1; i += 1) {
    output.push(i);
  }
  for (let i = 0; i < output.length; i += 1) {
    if (output[i] % 3 === 0 && output[i] % 5 === 0) {
      output[i] = 'fizzbuzz';
    } else if (output[i] % 5 === 0) {
      output[i] = 'buzz';
    } else if (output[i] % 3 === 0) {
      output [i] = 'fizz';
    }
  }
  return output;
}

module.exports = fizzbuzz;
