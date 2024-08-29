const fibonacci = function(n) {
    var first = 1;
    var second = 1;
    var fibo = 0;
    if(n == 1 || n == 2){
        return 1;
    } 
    else if(n == 0){
        return 0;
    } 
    else if(n < 0) {
        return 'OOPS'
    }
    else{
        for(let i = 0; i < n - 2; i++) {
            fibo = first + second;
            first = second;
            second = fibo;
        }
        return fibo;
    }
};

// Do not edit below this line
module.exports = fibonacci;
