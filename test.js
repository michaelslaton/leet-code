const twosum = (arr,target) => {
  let aMap = new Map();
  for (let i=0;i<arr.length;i++){
    let current = target - arr[i];
    if(aMap.has(current)) return [i, aMap.get(current)];
    else aMap.set(arr[i],i);
  }
  return null;
}