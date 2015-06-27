// write prime function
var Prime_is_awesome=function(num) {
    var divisor=3;
    while(divisor <= num/2) {
        if (num % divisor === 0) {
            return false;
        } else {
            divisor = divisor + 2;
        }
    }
    return true;
};


// create variables
var Primes_found_ftw = 2;
var max_primes = 10000;
var current_test_number = 3;

console.log("Prime #%s is %s", 1, 1);
console.log("Prime #%s is %s", 2, 2);

// while we aren't at 1000 primes keep increasing numbers we test
while (Primes_found_ftw < max_primes) {

    // test current number
    if (Prime_is_awesome(current_test_number) === true) {

        // if prime, print out and increase number we've found
        Primes_found_ftw = Primes_found_ftw + 1;
        console.log("Prime #%s is %s", Primes_found_ftw, current_test_number);
    }
    // if not prime, do nothing

    // increment current number
    current_test_number = current_test_number + 2;
}