// Given a number, determine if it is a circular prime.

//http://primes.utm.edu/glossary/xpage/CircularPrime.html

//Are there any primes which remain prime on any cyclic rotation of their digits?
//    Yes: 1193, 1931, 9311 and 3119 are all prime. Such primes are called circular primes
//(or decimal circular primes because this property clearly depends on the radix in which we write the numbers).


var getSieve = function(n)
{
    var sieve = new Array(n);

    for(var i = 0; i < sieve.length;i++)
    {
        sieve[i] = true;
    }

    if(n > 0)
    {
        sieve[0] = false;
    }

    if(n > 1)
    {
        sieve[1] = false;
    }

    for(var i = 2; i < Math.sqrt(n); i++)
    {
        var k = 2;
        while(i * k < n)
        {
            sieve[i*k] = false;
            k++;
        }
    }

    return sieve;
}

var isPrime = function(n)
{
    var sieve = getSieve(n + 1);
    return sieve[n];
}

var rotateNumber = function(n)
{

    var digits = n.toString().split('');
    var firstDigit = digits.shift();

    var rotatedDigits = digits.concat(firstDigit);
    var rotatedNumberString = rotatedDigits.join('');
    var rotatedNumber = Number(rotatedNumberString);

    return rotatedNumber;
}

var getRotations = function(number)
{
    var rotations = [];
    var numberOfRotations = number.toString().split('').length;

    var rotatedNumber = number;
    for(var i = 0; i < numberOfRotations; i++)
    {
        rotatedNumber = rotateNumber(rotatedNumber);
        rotations.push(rotatedNumber);
    }

    return rotations;
}

var checkIfRotational = function(n)
{
    var rotations = getRotations(n);

    console.log(rotations);

    var isRotational = true;

    for(var i = 0; i < rotations.length; i++)
    {
        if(!isPrime(rotations[i]))
        {
            isRotational = false;
            break;
        }
    }

    return isRotational;
};

console.log(checkIfRotational(123));

