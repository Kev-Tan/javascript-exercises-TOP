const repeatString = function(string, repeat) {

    if(repeat===-1){
        console.log("ERROR")
        return 'ERROR'
    }

    let res = ''
    for(let i =0;i<repeat; i++){
        res += string
    }
    console.log(res)
    return res
};

// Do not edit below this line
module.exports = repeatString;
