const fibonacci = function(val) {
    if (typeof val === 'string') val = Number(val);
    if (val < 0) return 'OOPS'; 
    if (val < 2) return val;
    let prev = 0;
    let current = 1;

    for (let i = 1; i < val; i++) {
        let temp = prev + current;
        prev = current;
        current = temp
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
