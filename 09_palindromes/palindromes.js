const palindromes = function (string) {
    const cleanedString = string.replace(/[\s\'\"\&\n\t\\\r\b\f\v!.,]/gi, '');

    let reversedString = "";

    for(let i = cleanedString.length - 1; i >= 0; i--) {
        reversedString += cleanedString[i];
    }

    if(reversedString.toLowerCase() === cleanedString.toLowerCase()) return true;

    return false;
};  

// Do not edit below this line
module.exports = palindromes;