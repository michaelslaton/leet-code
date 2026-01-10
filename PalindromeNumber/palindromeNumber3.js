
const isPalindrome = (x) => {
    if(x === Number(x.toString().split('').reverse().join(''))) return true;
    return false
};

console.log(isPalindrome(1221)); // True
console.log(isPalindrome(939)); // True
console.log(isPalindrome(-939)); // false
console.log(isPalindrome(12345)); // False