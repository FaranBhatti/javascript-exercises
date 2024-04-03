const repeatString = function(stringToRepeat, repeatAmount) {
    
    if (repeatAmount < 0)
    {
        return 'ERROR';
    }
    
    let finalString = "";
    
    for (let i = 0; i < repeatAmount; i++)
    {
        finalString += stringToRepeat;
    }
    
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
