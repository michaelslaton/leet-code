const reverseString = (s) => {
  let stringArr = s;
  let left = 0;
  let right = stringArr.length -1;

  while(left <right){
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp

    left++
    right--
  };

  return stringArr;
};

console.log(reverseString(["h","e","l","l","o"])); // expect ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // expect ["h","a","n","n","a","H"]