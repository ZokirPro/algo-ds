/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, target, l, r) => {

    if (l > r) return -1
    let mid = Math.floor((l + r) / 2)

    if (nums[mid] == target) return mid

    if (nums[mid] > target)
        return binarySearch(nums, target, l, mid - 1)
    else/**
    * @param {number[]} nums
    * @param {number} target
    * @return {number}
    */
        const binarySearch = (nums, target, l, r) => {

            if (l > r) return -1
            let mid = Math.floor((l + r) / 2)

            if (nums[mid] == target) return mid

            if (nums[mid] > target)
                return binarySearch(nums, target, l, mid - 1)
            else
                return binarySearch(nums, target, mid + 1, r)


        }

    var search = function (nums, target) {
        return binarySearch(nums, target, 0, nums.length - 1)
    };
    return binarySearch(nums, target, mid + 1, r)


}

var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};