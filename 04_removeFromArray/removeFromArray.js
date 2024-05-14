const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        let startIndx = 0;
        while (true) {
            const indx = arr.indexOf(arg, startIndx);
            if (indx === -1) break;
            arr.splice(indx, 1);
            startIndx = indx;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
