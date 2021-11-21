/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let count_zeros = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count_zeros++
            nums.splice(i, 1)
            i--
        }
    }

    while (count_zeros--) {
        nums.push(0)
    }

};
