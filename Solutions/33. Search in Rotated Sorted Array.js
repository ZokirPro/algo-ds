/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const BinarySearch = (nums, target, start, end) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) return -1

    if (nums[mid] == target) return mid

    if (nums[mid] > target)
        return BinarySearch(nums, target, start, mid - 1)
    else
        return BinarySearch(nums, target, mid + 1, end)
}
var search = function (nums, target) {

    let min = nums[0]
    let min_i = 0
    for (let i = 1; i < nums.length; i++)
        if (min > nums[i]) {
            min = nums[i]
            min_i = i
        }

    let index_1 = BinarySearch(nums, target, 0, min_i - 1)
    let index_2 = BinarySearch(nums, target, min_i, nums.length - 1)

    if (index_1 != -1)
        return index_1
    else if (index_2 != -1)
        return index_2
    else
        return -1
};