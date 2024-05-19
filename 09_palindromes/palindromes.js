const palindromes = function (string) {
    let formattedStr = string
                        .toLowerCase()
                        .replace(/[^a-z0-9]/gi, '');
    let reversedStr = formattedStr
                        .split('')
                        .reverse()
                        .join('');
    return formattedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
