const singleNumber = (nums) => {
    const sortedSet = nums.sort();

    for(let i=0;i<sortedSet.length;i+=2){
        if(!sortedSet[i+1]) return sortedSet[i];
        if(sortedSet[i] !== sortedSet[i+1]) return sortedSet[i];
    }
};