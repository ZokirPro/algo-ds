/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let pos = 0, neg
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0)
            pos++
    }
    neg = pos - 1

    while (pos < nums.length && neg >= 0) {
        let square_pos = nums[pos] ** 2
        let square_neg = nums[neg] ** 2

        if (square_pos > square_neg) {
            result.push(square_neg)
            neg--
        }
        else {
            result.push(square_pos)
            pos++
        }
    }

    while (pos < nums.length) {
        result.push(nums[pos] ** 2)
        pos++
    }
    while (neg >= 0) {
        result.push(nums[neg] ** 2)
        neg--
    }

    return result
};