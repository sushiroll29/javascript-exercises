const sumAll = function(firstNumber, secondNumber) {
    if(typeof(arguments[0]) !== 'number' || typeof(arguments[1]) !== 'number' || firstNumber < 0 || secondNumber < 0) return "ERROR";
    
    let sum = 0;
    let lowerLimit = firstNumber, higherLimit = secondNumber;
    
    if(firstNumber > secondNumber) {
        lowerLimit = secondNumber;
        higherLimit = firstNumber;
    }
    
    for(let i = lowerLimit; i <= higherLimit; i++){
        sum += i;
    }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
