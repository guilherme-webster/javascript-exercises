const removeFromArray = function(array, ...itemsRemoved) {
    return array.filter(x => !itemsRemoved.includes(x)) // removes all the x's included in itemsRemoved
};

// Do not edit below this line
module.exports = removeFromArray;
