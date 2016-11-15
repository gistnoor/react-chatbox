// prime number 
var isPrime = function(n){
    if(isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
        return false;
    }
    if (n % 2 === 0){
        return (n === 2);
    }
    if (n % 3 === 0){
        return (n === 3);
    }
    for (var i = 5, m = Math.sqrt(n); i <= m; i += 6){
        if ((n % i === 0) || (n % (i + 2) === 0)) {
            return false;
        }
    }
    return true;
}

var getPrimeUntilN = function(n){
    n = Math.abs(n);
    var primes = ( 1 < n ) ? [2] : [];
    if (isNaN(n) || !isFinite(n)) {
        return primes;
    }
    for (var i = 3; i <= n; i += 2){
        if (isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
};

console.log(getPrimeUntilN(50));
