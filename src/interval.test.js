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


describe('union', function () {
    test('interval1 before interval2', () => {
        let interval1 = new Interval(0,3) 
        let interval2 = new Interval(4,6)
        expect(interval1.union(interval2)).toEqual([new Interval(0,3),new Interval(4,6)])
    });

    test('interval2 before interval1', () => {
        let interval1 = new Interval(4,6) 
        let interval2 = new Interval(0,3)
        expect(interval1.union(interval2)).toEqual([new Interval(4,6), new Interval(0,3)])
    });

    test('interval1 inside interval2', () => {
        let interval1 = new Interval(1,3) 
        let interval2 = new Interval(0,6)
        expect(interval1.union(interval2)).toEqual([interval2])
    });
    
    test('interval2 inside interval1', () => {
        let interval1 = new Interval(0,6) 
        let interval2 = new Interval(1,3)
        expect(interval1.union(interval2)).toEqual([interval1])
    });

    test('before and inside', () => {
        let interval1 = new Interval(0,4) 
        let interval2 = new Interval(2,6)
        expect(interval1.union(interval2)).toEqual([new Interval(0,6)])
    });

    test('inside and after', () => {
        let interval1 = new Interval(4,8) 
        let interval2 = new Interval(2,6)
        expect(interval1.union(interval2)).toEqual([new Interval(2,8)])
    });

    test('same', () => {
        let interval1 = new Interval(0,10) 
        let interval2 = new Interval(0,10)
        expect(interval1.union(interval2)).toEqual([new Interval(0,10)])
    });
});


describe('intersection', function () {
    test('interval1 before interval2', () => {
        let interval1 = new Interval(0,3) 
        let interval2 = new Interval(4,6)
        expect(interval1.intersection(interval2)).toBeNull()
    });

    test('interval2 before interval1', () => {
        let interval1 = new Interval(4,6) 
        let interval2 = new Interval(0,3)
        expect(interval1.intersection(interval2)).toBeNull()
    });

    test('interval1 inside interval2', () => {
        let interval1 = new Interval(1,3) 
        let interval2 = new Interval(0,6)
        expect(interval1.intersection(interval2)).toBe(interval1)
    });
    
    test('interval2 inside interval1', () => {
        let interval1 = new Interval(0,6) 
        let interval2 = new Interval(1,3)
        expect(interval1.intersection(interval2)).toBe(interval2)
    });

    test('before and inside', () => {
        let interval1 = new Interval(0,4) 
        let interval2 = new Interval(2,6)
        expect(interval1.intersection(interval2)).toEqual(new Interval(2,4))
    });

    test('inside and after', () => {
        let interval1 = new Interval(4,8) 
        let interval2 = new Interval(2,6)
        expect(interval1.intersection(interval2)).toEqual(new Interval(4,6))
    });

    test('same', () => {
        let interval1 = new Interval(0,10) 
        let interval2 = new Interval(0,10)
        expect(interval1.intersection(interval2)).toEqual(new Interval(0,10))
    });
});


describe('exclusion', function () {
    test('interval1 before interval2', () => {
        let interval1 = new Interval(0,3) 
        let interval2 = new Interval(4,6)
        expect(interval1.exclusion(interval2)).toEqual([interval1,interval2])
    });

    test('interval2 before interval1', () => {
        let interval1 = new Interval(4,6) 
        let interval2 = new Interval(0,3)
        expect(interval1.exclusion(interval2)).toEqual([interval1,interval2])
    });

    test('interval1 inside interval2', () => {
        let interval1 = new Interval(1,3) 
        let interval2 = new Interval(0,6)
        expect(interval1.exclusion(interval2)).toEqual([new Interval(0,1),new Interval(3,6)])
    });
    
    test('interval2 inside interval1', () => {
        let interval1 = new Interval(0,6) 
        let interval2 = new Interval(1,3)
        expect(interval1.exclusion(interval2)).toEqual([new Interval(0,1),new Interval(3,6)])
    });

    test('before and inside', () => {
        let interval1 = new Interval(0,4) 
        let interval2 = new Interval(2,6)
        expect(interval1.exclusion(interval2)).toEqual([new Interval(0,2), new Interval(4,6)])
    });

    test('inside and after', () => {
        let interval1 = new Interval(4,8) 
        let interval2 = new Interval(2,6)
        expect(interval1.exclusion(interval2)).toEqual([new Interval(2,4), new Interval(6,8)])
    });

    test('same', () => {
        let interval1 = new Interval(0,10) 
        let interval2 = new Interval(0,10)
        expect(interval1.exclusion(interval2)).toEqual([])
    });
});