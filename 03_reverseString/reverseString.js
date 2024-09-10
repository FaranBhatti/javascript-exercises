const reverseString = function(string) {

    const arrayOfStringChars = string.split("");
    let reversedString = "";

    for (let i = 1; i <= arrayOfStringChars.length; i++) {
        reversedString += arrayOfStringChars[arrayOfStringChars.length - i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
