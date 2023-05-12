let twoSum = function(nums, target) {
    let resA=[];
    let res=0;
//    fueraLoop:
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            res=nums[i]+nums[j];
            if (res===target && i!==j){
                resA=[i,j];
//                break fueraLoop;
            }
        }
    }return resA;
};

/* Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
 */

nums = [3,2,4];
target = 6;
//[0,1]
console.log(twoSum(nums,target));