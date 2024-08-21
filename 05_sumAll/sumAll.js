const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }
    if(b > a){
        return (b - a + 1) * (b + a) / 2;
    } else {
        return (a - b + 1) * (b + a) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
