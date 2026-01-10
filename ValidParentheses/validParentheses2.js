const isValid = (s) => {
  if(s.length % 2 !== 0) return false;

  const parentheses = new Map([
    ["(",")"],
    ["[","]"],
    ["{","}"],
  ])

  let stack = [];

  for(let symbol of s){
    if(parentheses.has(symbol)) stack.push(symbol);
    else {
      const prev = stack.pop();
      if (symbol !== parentheses.get(prev)) return false
    }
  };

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("([])")); // true
console.log(isValid("(]")); // false
console.log(isValid("(")); // false
console.log(isValid("((")); // false
console.log(isValid("]()")); // false