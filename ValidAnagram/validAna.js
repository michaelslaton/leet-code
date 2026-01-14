var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  if (s.length !== t.length) return false;

  let aMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let sCount = aMap.get(s[i]) || 0;
    aMap.set(s[i], sCount + 1);

    let tCount = aMap.get(t[i]) || 0;
    aMap.set(t[i], tCount - 1);
  }

  for (let count of aMap.values()) {
    if (count !== 0) return false;
  }

  return true;
}