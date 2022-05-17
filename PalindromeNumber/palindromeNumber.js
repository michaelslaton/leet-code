 var isPalindrome = function(x) {

  if(Number(Array.from(String(x), Number).reverse().join('')) === x) return true;

  return false;
};

console.log(isPalindrome(1221)); // True
console.log(isPalindrome(939)); // True
console.log(isPalindrome(12345)); // False