var arr = [...Array(5).keys()]
var nums = Array.from({length: 5}, (_, i) => i + 1)


var twoSum = function(nums, target) {
    
    var left = 0
    var right = nums.length - 1, pair = null
    while(left != right){
        pairSum = nums[left] + nums[right]
        if(pairSum === target){
            pair = [nums.indexOf(nums[left]), nums.indexOf(nums[right])]
            break
        } else if (pairSum < target ){
            left++
        } else if(pairSum > target){
            right--
        }
    }
    return pair 
    
    
}
alert(twoSum(nums, 6))