const num = 1221;

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

  if(Number(Array.from(String(x), Number).reverse().join('')) === x) return true;

  return false;
};

console.log(isPalindrome(num));