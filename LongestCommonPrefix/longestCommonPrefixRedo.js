const longestCommonPrefix = (strs) => {
  if(!strs[0].length) return "";
  let results = [];
  const firstWord = strs[0];
  for(let i=0;i<firstWord.length;i++){
    const currentLetter = firstWord[i];
    for(let j=1;j<strs.length;j++){
      currentWord = strs[j]
      if(currentLetter === currentWord[i]) continue;
      else return results.join("");
    };
    results.push(currentLetter);
  };
  return results.join("");
};


console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["","",""])); // ""