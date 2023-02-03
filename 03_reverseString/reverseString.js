const reverseString = function(wordToReverse) {
    let splitWord = wordToReverse.split('');
    let reversedWord = '';

    for(let i = splitWord.length - 1; i >= 0 ; i--){
        reversedWord += splitWord[i];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
