/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // can use this for better understanding 
  
   /* for (let i=0; i<nums.length; i++){
        for(let j=i + 1; j<nums.length; j++) {
            if (nums[i]+nums[j] === target) {
                return [i, j];
            }
        }
    }*/  

  // this for better run time
    let map= new Map();
    for (let i=0; i<nums.length; i++){
      let reminder= target-nums[i];
      if(map.has(reminder)){
        return [map.get(reminder), i]
      } else
      map.set(nums[i],i);
    }
};
