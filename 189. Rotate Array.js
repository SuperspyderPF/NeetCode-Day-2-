/**Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */ //did not run but worked =>
 var rotate = function(nums, k) {
    nums.reverse()
    var nums1 = nums.splice(k)
    var az = nums.sort((a,b)=>a-b)
    var aj = nums1.sort((a,b)=>a-b)
    var sol = az.concat(aj)
    return sol 
    
};

//did not run but worked=>

var rotate = function(nums, k) {
    // let index = nums.length - 1
    // nums.unshift(nums.splice(index, k)[0])
    // return nums.repeat(3)
    for(let i=0;i<k;i++){
        let index = nums.length - 1
        nums.unshift(nums.splice(index, k)[0])
        
    }
    return nums
    
};

/// worked => 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 function revNums(nums,start,end){
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}
var rotate = function(nums, k) {
    k = k % nums.length
    nums.reverse()
    revNums(nums, 0, k-1)
    revNums(nums, k, nums.length -1)
    
};

//time O(n) space O(1)