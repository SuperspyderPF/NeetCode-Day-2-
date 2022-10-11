///given an array, find the avrage of all contiguous subarrays of size "K"
var nums = [1,2,3,4,5], k = 3
function arvg(nums, k){
    var avg = []
    let windowStart = 0, windowSum = 0
    for (let windowEnd = 0;windowEnd<nums.length; windowEnd++){
        windowSum += nums[windowEnd]
        if(windowEnd >= k - 1){
            avg.push(windowSum / k)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }
    return avg
    
}
alert(arvg(nums,k))
