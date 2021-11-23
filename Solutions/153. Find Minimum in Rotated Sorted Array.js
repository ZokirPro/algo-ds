/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
   
    
    let start=0
    let end=nums.length-1
    let n=nums.length
    if(nums[0]<=nums[nums.length-1]){
        return nums[0]
    }
    else 
        while(start<=end){
        let mid=Math.floor((start+end)/2)
        console.log(nums[mid],nums[mid+1])
        if(nums[mid]>=nums[start]) {
            if((mid!=n-1&&nums[mid]>nums[mid+1]))
                return nums[mid+1]
            else if(nums[n-1]<nums[n-2])
                return nums[n-1]
            else{
                start=mid+1
            }
        }
        else{
            if((mid!=0&&nums[mid]<nums[mid-1])||nums[0]<nums[n-1]){
                return nums[mid]
            }
            else{
                end=mid-1
            }
        } 
    }
};