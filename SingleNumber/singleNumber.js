const singleNumber = (nums) => {
    let numSet = new Set();
    let results = 0;
    nums.forEach(num => {
      if(!numSet.has(num)) {
        numSet.add(num);
        results += num;
      } else results -= num;
    });
    return results;
};