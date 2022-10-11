var nums = [-1,0,1,2,-1,-4]
function threeSum(nums){
    nums.sort((a,b)=>a-b)
    var sol = []
    for(let i=0;i<nums.length;i++){
        let targetSum = -nums[i]
        if(i>0 && nums[i]===nums[i-1]){
              continue 
      }
      searchPair(nums, targetSum, i + 1, sol)
    }
    
    return sol
}
function searchPair(nums,targetSum,left, sol){
    let right = nums.length - 1
    while(left < right){
        const currentSum = nums[left] + nums[right]
        if(currentSum === targetSum){
            sol.push([-targetSum, nums[left], nums[right]])
            left++
            right--
            while(left < right && nums[left]===nums[left-1]){
                left++
            }
            while(left < right && nums[right] === nums[right + 1]){
                right--
            }
            
        } else if(targetSum>currentSum){
            left++
        } else if(targetSum<currentSum){
            right--
        }
    }
}

alert(threeSum(nums))