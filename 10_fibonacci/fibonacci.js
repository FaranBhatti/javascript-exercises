const fibonacci = function(num) {
    if(num < 0) return "OOPS"

    let firstNum = 0;
    let secondNum = 1;

    if(num == 0) return firstNum;
    if(num == 1) return secondNum;

    let newNum = 0;

    for(let i = 2; i <= num; i++) {
        newNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = newNum;
    }

    return newNum;
};

// Do not edit below this line
module.exports = fibonacci;
