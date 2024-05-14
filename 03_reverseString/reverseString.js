const reverseString = function(str) {
    result = str.split('');
    left = 0;
    right = str.length - 1;
    while (left < right) {
        const temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        left++;
        right--;
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
