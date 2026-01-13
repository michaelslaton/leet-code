var intersection = function(nums1, nums2) {
    let numSet = new Set(nums1);
    let results = []

    for(let i=0;i<nums2.length;i++){
        if(numSet.has(nums2[i]) && numSet.has(nums2[i+1])) results = [nums2[i],nums2[i+1]];
    }
    if(results[0] === results[1]) return [results[0]];
    else return results;
};