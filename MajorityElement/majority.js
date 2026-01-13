const majorityElement = (nums) => {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[Math.floor(sortedNums.length / 2)]
};