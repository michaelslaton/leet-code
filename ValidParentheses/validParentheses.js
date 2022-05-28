var isValid = function (s) {
  let arr = [];
  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") arr.push(char);

    if (char === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else if (char === ")" && arr[arr.length - 1] !== "(") {
      return false;
    };

    if (char === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else if (char === "]" && arr[arr.length - 1] !== "[") {
      return false;
    };

    if (char === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (char === "}" && arr[arr.length - 1] !== "{") {
      return false;
    };
    
  }

  if (arr.length === 0){ return true} else { return false };
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("(")); // false
