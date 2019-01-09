/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if(array.length < 3){
    return 0;
  }

  if(!(Array.isArray(array))){
    return 0;
  }



  const sorted = array.sort(function(a, b){return b-a});
  let product =1;
  for(let i =0; i<=2; i++){
    product = product * [sorted[i]];
  }

  return product;


}

module.exports = highestProduct;
