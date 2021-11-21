/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {}
    let maxLen = 0
    let start = 0

    for (let end = 0; end < s.length; end++) {
        let current_char = s[end]

        if (map[current_char] === undefined) {
            map[current_char] = 0
        }

        map[current_char] += 1

        while (map[current_char] > 1) {
            let firstChar = s[start]
            map[firstChar] -= 1
            start++
        }

        maxLen = Math.max(maxLen, end - start + 1)
    }

    return maxLen
};