module.exports = function reverse (n) {
    let nStr = n.toString();
    let length = nStr.length - 1;
    let result = '';
    let i = 0;
    while (i <= length) {
        result += nStr[length - i]
        i++;
    }
    return parseInt(result);
}
