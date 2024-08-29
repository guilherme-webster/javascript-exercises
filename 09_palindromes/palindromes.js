const palindromes = function (string) {
    var newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    newString = newString.toLowerCase();
    var aux = newString.split(' ');
    newString = aux.join('')
    var arr = newString.split('');
    arr.reverse();
    return (newString == arr.join(''))
};

// Do not edit below this line
module.exports = palindromes;
