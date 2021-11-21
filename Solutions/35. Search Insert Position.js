const binarySearch = (nums, target, start, end) => {

    let mid = Math.floor((start + end) / 2)

    if (start > end) return start

    if (nums[mid] === target) return mid

    if (nums[mid] > target) return binarySearch(nums, target, start, mid - 1)
    else return binarySearch(nums, target, mid + 1, end)
}
var searchInsert = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};