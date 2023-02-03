const removeFromArray = function(array, ...itemsToRemove) {
    const newArray = [];
    array.forEach((item) => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });
  
 return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
