const twoSum = (nums, target) => {
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(j === i) continue;
            if(nums[i] + nums[j] === target) return [i,j];
        }
    };
};

console.log(twoSum([2,7,11,15],9)); // [0,1]
console.log(twoSum([3,2,4],6)); // [1,2]
console.log(twoSum([3,3],6)); // [0,1]