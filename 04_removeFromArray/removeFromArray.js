const removeFromArray = function(array, ...args) 
{
    const filteredArray = [];

    array.forEach((item) => {
        if (!args.includes(item))
        {
            filteredArray.push(item);
        }
    });

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
