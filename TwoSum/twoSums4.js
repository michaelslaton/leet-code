const twoSum = (nums, target) => {
  let numsMap = new Map();

  for(let i=0;i<nums.length;i++){
    const compliment = target - nums[i];
    if(numsMap.has(compliment)) return [numsMap.get(compliment), i];
    numsMap.set(nums[i],i);
  };
};

console.log(twoSum([2,7,11,15],9)); // [0,1]
console.log(twoSum([3,2,4],6)); // [1,2]
console.log(twoSum([3,3],6)); // [0,1]