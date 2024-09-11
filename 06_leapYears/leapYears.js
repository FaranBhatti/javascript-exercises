const leapYears = function(year) {

    // booleans to check
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
    
    // leap years are years divisible by four
    // however if they're divisible by 100 they are not leap years
    // unless they're divisible by 400
    if ((isYearDivisibleByFour) && (!isCentury || isYearDivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
