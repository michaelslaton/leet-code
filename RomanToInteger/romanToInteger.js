/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
   const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

   const numArr = Array.from(s, (n) => romanNumerals[n]).reverse();

   return numArr.reduce((result, num, i) => {
     i = i - 1;

     if (numArr[i] > numArr[i + 1] && numArr[i + 1]) {
       return result - num;
     } else {
       return result + num;
     }

   });
 };

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994