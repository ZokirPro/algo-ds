const leftBinarySearch = (nums, target, start, end) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) return -1

    else if ((mid == 0 || target > nums[mid - 1]) && nums[mid] == target)
        return mid
    else if (nums[mid] < target)
        return leftBinarySearch(nums, target, mid + 1, end)
    else
        return leftBinarySearch(nums, target, start, mid - 1)
}

const rightBinarySearch = (nums, target, start, end) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) return -1

    else if ((mid == nums.length - 1 || target < nums[mid + 1]) && nums[mid] == target) return mid

    else if (nums[mid] > target)
        return rightBinarySearch(nums, target, start, mid - 1)
    else
        return rightBinarySearch(nums, target, mid + 1, end)

}

var searchRange = function (nums, target) {
    const index_l = leftBinarySearch(nums, target, 0, nums.length - 1)
    const index_r = rightBinarySearch(nums, target, 0, nums.length - 1)

    return [index_l, index_r]

};