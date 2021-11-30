/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(s, nums) {
    let windowSum = 0
    let output = Infinity;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd];
      // shrink the window until the windowSum is smaller than s
      while (windowSum >= s) {
        output = Math.min(output, windowEnd - windowStart + 1);
        // subtract the element at the windowStart index
        windowSum -= nums[windowStart];
        // change windowStart to the next element
        windowStart++; 
      }
    }
    return output == Infinity ? 0 : output;
};