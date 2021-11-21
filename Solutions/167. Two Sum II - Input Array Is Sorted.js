/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let BinarySearch = (nums, target, start, end) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) return -1

    if (nums[mid] == target) return mid

    if (nums[mid] > target) //before mid
        return BinarySearch(nums, target, start, mid - 1)
    else //after mid
        return BinarySearch(nums, target, mid + 1, end)

}
var twoSum = function (nums, target) {
    let result
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i])
            continue

        let nextTarget = target - nums[i]
        let index = BinarySearch(nums, nextTarget, i + 1, nums.length)
        if (index != -1) {
            result = [i + 1, index + 1]
            break
        }

    }
    return result
};