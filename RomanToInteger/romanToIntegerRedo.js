const romanToInt2 = (x) => {
  const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let results = 0;

  for(let i=0;i<x.length;i++){
    let current = numerals[x[i]];
    let next = numerals[x[i + 1]]
    if(current < next) results -= current;
    else results += current;
  };

  return results;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("XIV")) // 14