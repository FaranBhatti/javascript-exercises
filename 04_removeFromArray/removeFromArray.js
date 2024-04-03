const removeFromArray = function(array, elementToRemove) 
{
    const lengthOfArray = array.length;
    let updatedArray = [];

    for (let element in array)
    {
        if (array[element] !== elementToRemove)
        {
            updatedArray.push(array[element]);
        }
    }

    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
