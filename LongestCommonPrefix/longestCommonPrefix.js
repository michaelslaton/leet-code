var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let results = "";
  for(let i=0;i<200;i++){
    let current = results + strs[0][i];
    if(strs.every((word)=> word.startsWith(current))){
      results=current
    } else {
      return results;
    };
  }
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["","",""])); // ""