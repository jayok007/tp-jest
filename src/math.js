let Util = {};
Util.factorial = (n) => {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    if(n<0){
        throw 'Unable to compute prime on n < 0'
    }
    if(n < 2){
        return false
    }
    else{
        for(i=2; i < Math.sqrt(n);i++){
            if(n/i%1 == 0){
                return false
            }
        }
        return true
    }
};


// /**
//  * Additionne l'ensemble des nombres premiers de 2 à n
//  *
//  * Util.sumPrime(6) = 2 + 3 + 5 = 10
//  * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
//  *
//  * @param {number} n
//  * @returns {number}
//  */
Util.sumPrime = function(n) {

};

// /**
//  * Cette méthode doit retourner un tableau de 1 à n tel que:
//  * - Pour les nombres multiples de 3, les remplacer par "Fizz"
//  * - Pour les nombres multiples de 5, les remplacer par "Buzz"
//  * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
//  *
//  * Exp :
//  * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
//  *
//  * @param {number} n
//  * @returns {array}
//  */
// Util.fizzBuzz = function(n) {

// };

// /**
//  * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
//  *
//  * Exp :
//  * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
//  *
//  * @param phrase
//  * @returns {string}
//  */
// Util.cipher = function (phrase) {

// };


module.exports = Util;

