const leapYears = function(year) {
    let divisibleBy4 = ((year % 4) == 0);
    let divisibleBy100 = ((year % 100) == 0);
    let divisibleBy400 = ((year % 400) == 0);

    if(divisibleBy100 && divisibleBy400) return true;
    else if(divisibleBy4 && !divisibleBy100) return true;
    else return false;
};

//leapYears(1997);

// Do not edit below this line
module.exports = leapYears;
