const leapYears = function(year) {
    
    // leap years are years divisible by four
    // however if they're divisible by 100 they are not leap years
    // unless they're divisible by 400
    if (year && 4) {
        if (year && 100) {
            if (year && 400) {

                return true;
            }

            return false;
        }
        
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
