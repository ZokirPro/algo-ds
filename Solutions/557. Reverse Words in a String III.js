/**
 * @param {string} s
 * @return {string}
 */
const revString = (s) => {
    var start = 0, end = s.length - 1
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
    }
    return s.join('')
}
var reverseWords = function (s) {
    let words = s.split(' ')
    let result_words = []
    for (let i = 0; i < words.length; i++) {
        result_words.push(revString(words[i].split('')))
    }
    return result_words.join(' ')
};