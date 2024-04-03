const reverseString = function(string) 
{
    // create variable to store length of the string
    let lengthOfString = string.length;

    // create reversedString variable and initialize it to be an empty string
    let reversedString = '';

    // iterate over all the elements of the string provided and add each of those elements to the reversedString until we hit 0
    for (let i = lengthOfString; i >= 0; i--)
    {
        reversedString += string[i];
    }

    return (reversedString.slice(9));
};

// Do not edit below this line
module.exports = reverseString;
