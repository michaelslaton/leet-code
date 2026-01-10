var isValid = function (s) {
  let result = [];
  let chars = new Map([
    ['(',')'],
    ['[',']'],
    ['{','}']
  ]);

  for(let i=0;i<s.length;i++){
    if(chars.has(s[i])) result.push(chars.get(s[i]));
    else if (s[i] !== result.pop()) return false;
  };
  return result.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("(")); // false
console.log(isValid("((")); // false
console.log(isValid("]()")); // false