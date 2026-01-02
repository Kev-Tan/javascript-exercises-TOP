const removeFromArray = function(arr, ...args) {
    res = arr.filter((x)=>!args.includes(x))
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
