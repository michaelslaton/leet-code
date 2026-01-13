const groupAnagrams = (strs) => {
    let results = [];
    for(let i=0;i<strs.length;i++){
      if(!results.length) {
        results.push([strs[i]])
        continue
      };

      for(let j=0;j<results.length;j++){
        if(results[j][0].split('').sort().join('') === strs[i].split('').sort().join('')){
          results[j].push(strs[i])
          break
        }
        else if (j === results.length - 1) {
          results.push([strs[i]])
          break
        };
      }
    }
    return results;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));