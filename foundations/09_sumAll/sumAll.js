const sumAll = function(a,b) {

    if (a>b){
        let temp = a
        a = b
        b = temp
    }

    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) || typeof a == "string" || typeof b == "string"){
        return "ERROR"
    }

    res = 0
    for(let i = a; i<=b;i++){
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
