const Interval = require('./interval');

describe('overlaps', function () {
    test('inside', () => {
        let interval1 = new Interval(0,3) 
        let interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

    test('before', () => {
        let interval1 = new Interval(0,1) 
        let interval2 = new Interval(2,3)
        expect(interval1.overlaps(interval2)).toBe(false)
    });
    
    test('before touch', () => {
        let interval1 = new Interval(0,1) 
        let interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(false)
    });

    test('after', () => {
        let interval1 = new Interval(3,4) 
        let interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(false)
    });

    test('after touch', () => {
        let interval1 = new Interval(2,3) 
        let interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(false)
    });

    test('before & inside', () => {
        let interval1 = new Interval(1,3) 
        let interval2 = new Interval(2,4)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

    test('inside & after', () => {
        let interval1 = new Interval(3,5) 
        let interval2 = new Interval(2,4)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

    test('same', () => {
        let interval1 = new Interval(0,10) 
        let interval2 = new Interval(0,10)
        expect(interval1.overlaps(interval2)).toBe(true)
    });
});



describe('includes', function () {
    test('inside', () => {
        let interval1 = new Interval(0,3) 
        let interval2 = new Interval(1,2)
        expect(interval1.includes(interval2)).toBe(true)
    });

    test('before', () => {
        let interval1 = new Interval(0,1) 
        let interval2 = new Interval(2,3)
        expect(interval1.includes(interval2)).toBe(false)
    });
    
    test('before touch', () => {
        let interval1 = new Interval(0,1) 
        let interval2 = new Interval(1,2)
        expect(interval1.includes(interval2)).toBe(false)
    });

    test('after', () => {
        let interval1 = new Interval(3,4) 
        let interval2 = new Interval(1,2)
        expect(interval1.includes(interval2)).toBe(false)
    });

    test('after touch', () => {
        let interval1 = new Interval(2,3) 
        let interval2 = new Interval(1,2)
        expect(interval1.includes(interval2)).toBe(false)
    });

    test('before & inside', () => {
        let interval1 = new Interval(1,3) 
        let interval2 = new Interval(2,4)
        expect(interval1.includes(interval2)).toBe(false)
    });

    test('inside & after', () => {
        let interval1 = new Interval(3,5) 
        let interval2 = new Interval(2,4)
        expect(interval1.includes(interval2)).toBe(false)
    });

    test('same', () => {
        let interval1 = new Interval(0,10) 
        let interval2 = new Interval(0,10)
        expect(interval1.includes(interval2)).toBe(true)
    });
});