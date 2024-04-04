const sumAll = function(num1, num2) {

    // create a variable to hold the sum and initialize it to 0
    let sum = 0;

    if((typeof num1 !== "number") || (typeof num2 !== "number")) 
    {
        return 'ERROR';
    } // End case 1: check if it's a number
    else if ((num1 < 0) || (num2 < 0)) 
    {
        return 'ERROR';
    }// End case 2: check if it's negative or not
    else if (num1 > num2)
    {
        let holdNum1 = num1;
        num1 = num2;
        num2 = holdNum1;
    } // End case 3: check if num2 is bigger than num1
    
    
    // iterate over that array and add it to the sum
    for (let i = num1; i <= num2; i++)
    {
        sum += i;
        //arrayOfNums.push(num1 + 1);
    }

    return sum;
};

sumAll(10, "90");

// Do not edit below this line
module.exports = sumAll;