const groupAnagrams = (strs) => {
  let strMap = new Map();

  for(let word of strs){
    const key = word.split('').sort().join('');

    if(!strMap.has(key)) strMap.set(key,[word]);
    else strMap.get(key).push(word);
  }

  return Array.from(strMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));