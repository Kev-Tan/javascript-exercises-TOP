const palindromes = function (str) {
    let newString = str.replace(/[^a-z0-9]/gi, "")
    const newStringFormatted = newString.toUpperCase()
    const reversedString = newStringFormatted.split("").reverse().join("")
    if(reversedString === newStringFormatted) return true
    else return false

};

// Do not edit below this line
module.exports = palindromes;
