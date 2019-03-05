const Util = require('./math');

describe('Factorial', function () {

    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow('Unable to compute factorial for n < 0');
    });
});

describe('Prime', () => {

    test.each([
        [0, false],
        [1, false],
        [2, true],
        [3, true],
        [5, true],
        [6, false],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        },
    );

    test('0', () =>{
        expect(Util.isPrime(0)).toBe(false)
        expect(Util.isPrime(1)).toBe(false)
    });
});