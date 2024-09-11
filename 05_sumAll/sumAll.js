const sumAll = function(num1, num2) {
    
    let sum = 0;

    if (num1 > num2) {
        sum = num2;
        num2 = num1;
        num1 = sum;
        sum = 0;
    }

    if ((num1 || num2) < -1) {
        return 'ERROR'
    }

    if (!(num1 === Math.floor(num1))) {
        return 'ERROR'
    }

    if (!(num2 === Math.floor(num2))) {
        return 'ERROR'
    }
    
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
