const Interval = require('./interval');

describe('overlaps', function () {
    test('inside', () => {
        interval1 = new Interval(0,3) 
        interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

    test('before', () => {
        interval1 = new Interval(0,1) 
        interval2 = new Interval(2,3)
        expect(interval1.overlaps(interval2)).toBe(false)
    });
    
    test('before touch', () => {
        interval1 = new Interval(0,1) 
        interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(false)
    });

    test('after', () => {
        interval1 = new Interval(3,4) 
        interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(false)
    });

    test('after touch', () => {
        interval1 = new Interval(2,3) 
        interval2 = new Interval(1,2)
        expect(interval1.overlaps(interval2)).toBe(false)
    });

    test('before & inside', () => {
        interval1 = new Interval(1,3) 
        interval2 = new Interval(2,4)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

    test('inside & after', () => {
        interval1 = new Interval(3,5) 
        interval2 = new Interval(2,4)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

    test('same', () => {
        interval1 = new Interval(0,10) 
        interval2 = new Interval(0,10)
        expect(interval1.overlaps(interval2)).toBe(true)
    });

});