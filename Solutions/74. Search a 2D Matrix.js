/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const binarySearch = (matrix, target, start, end, row_i, n) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) return false

    if (matrix[row_i][mid] === target) return true

    if (matrix[row_i][mid] > target) return binarySearch(matrix, target, start, mid - 1, row_i, n)
    else return binarySearch(matrix, target, mid + 1, end, row_i, n)
}
const binarySearchRowIndex = (matrix, target, start, end, m, n) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) return start

    if (matrix[mid][n - 1] === target) return mid

    if (matrix[mid][n - 1] > target) return binarySearchRowIndex(matrix, target, start, mid - 1, m, n)
    else return binarySearchRowIndex(matrix, target, mid + 1, end, m, n)
}

var searchMatrix = function (matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let row_i = binarySearchRowIndex(matrix, target, 0, matrix.length - 1, m, n)
    console.log(row_i, m)
    if (row_i == m) return false
    else {
        return binarySearch(matrix, target, 0, n - 1, row_i, n)
    }

};