/* global c3: true */

describe('Stack', function () {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('new', function () {
        var emtpyStack = new c3.Stack(),
            unlimitedStack = new c3.Stack(arr);

        expect(emtpyStack.max).toEqual(0);
        expect(emtpyStack.data).toEqual([]);

        expect(unlimitedStack.max).toEqual(0);
        expect(unlimitedStack.data).toEqual(arr);

        expect(function () {
            new c3.Stack(arr, 1);
        }).toThrowError('The specified data has exceeded the max size.');
    });

    it('push', function () {
        var stack = new c3.Stack(arr.slice(), arr.length + 1);

        stack.push(10);
        expect(stack.data).toEqual(arr.concat([10]));

        expect(function () {
            stack.push(11);
        }).toThrowError('Stack is full!');
    });

    it('pop', function () {
        var emptyStack = new c3.Stack(),
            stack = new c3.Stack(arr.slice());

        expect(emptyStack.size()).toEqual(0);
        expect(emptyStack.pop()).toBe(null);

        expect(stack.pop()).toEqual(9);
        expect(stack.size()).toEqual(arr.length - 1);
        expect(stack.data).toEqual(arr.slice(0, arr.length - 1));
    });

    it('peek', function () {
        var emptyStack = new c3.Stack(),
            stack = new c3.Stack(arr.slice());

        expect(emptyStack.peek()).toBe(null);
        expect(stack.peek()).toEqual(9);
    });

    it('size', function () {
        var stack = new c3.Stack(arr.slice());
        expect(stack.size()).toEqual(arr.length);
    });
});

describe('useSingleArrayImplementStacks', function () {
    describe('push', function () {
        it('invalid stack id', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);

            expect(function () {
                arrayStacks.push(3, 1);
            }).toThrowError('Invalid stack id!');
        });

        it('no enough space', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);

            arrayStacks.push(0, 0);
            arrayStacks.push(1, 1);
            arrayStacks.push(2, 2);
            expect(function () {
                arrayStacks.push(2, 3);
            }).toThrowError('No enough space to push!');
        });

        it('successful', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);

            for (var i = 0, l = arrayStacks.arr.length; i < l; i += 1) {
                expect(arrayStacks.arr[i]).toBeUndefined();
            }

            arrayStacks.push(0, 0);
            for (var i = 1, l = arrayStacks.arr.length; i < l; i += 1) {
                expect(arrayStacks.arr[i]).toBeUndefined();
            }
            expect(arrayStacks.arr.slice(0, 1)).toEqual([{ value: 0, prev: null }]);

            arrayStacks.push(1, 1);
            for (var i = 2, l = arrayStacks.arr.length; i < l; i += 1) {
                expect(arrayStacks.arr[i]).toBeUndefined();
            }
            expect(arrayStacks.arr.slice(0, 2)).toEqual([{ value: 0, prev: null }, { value: 1, prev: null }]);

            arrayStacks.push(1, 2);
            expect(arrayStacks.arr).toEqual([{ value: 0, prev: null }, { value: 1, prev: null }, { value: 2, prev: 1 }]);
        });
    });

    describe('pop', function () {
        it('invalid stack id', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);

            expect(function () {
                arrayStacks.pop(3, 1);
            }).toThrowError('Invalid stack id!');
        });

        it('empty stack', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);
            arrayStacks.push(0, 1);
            arrayStacks.push(0, 2);
            arrayStacks.push(0, 3);
            expect(arrayStacks.arr).toEqual([
                { value: 1, prev: null },
                { value: 2, prev: 0 },
                { value: 3, prev: 1 }
            ]);

            expect(arrayStacks.pop(1)).toBe(null);
        });

        it('successful', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);
            arrayStacks.push(0, 0);
            arrayStacks.push(0, 1);
            arrayStacks.push(1, 2);

            expect(arrayStacks.arr).toEqual([
                { value: 0, prev: null },
                { value: 1, prev: 0 },
                { value: 2, prev: null }
            ]);

            expect(arrayStacks.pop(1)).toBe(2);
            expect(arrayStacks.arr[2]).toBeUndefined();
            expect(arrayStacks.arr.slice(0, 2)).toEqual([
                { value: 0, prev: null },
                { value: 1, prev: 0 }
            ]);
        });
    });

    describe('peek', function () {
        it('invalid stack id', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);

            expect(function () {
                arrayStacks.peek(3);
            }).toThrowError('Invalid stack id!');
        });

        it('empty stack', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);
            arrayStacks.push(0, 1);
            arrayStacks.push(0, 2);
            arrayStacks.push(0, 3);
            expect(arrayStacks.arr).toEqual([
                { value: 1, prev: null },
                { value: 2, prev: 0 },
                { value: 3, prev: 1 }
            ]);

            expect(arrayStacks.peek(1)).toBe(null);
        });

        it('successful', function () {
            var arrayStacks = c3.useSingleArrayImplementStacks(new Array(3), 3);
            arrayStacks.push(0, 0);
            arrayStacks.push(0, 1);
            arrayStacks.push(1, 2);

            expect(arrayStacks.arr).toEqual([
                { value: 0, prev: null },
                { value: 1, prev: 0 },
                { value: 2, prev: null }
            ]);

            expect(arrayStacks.peek(0)).toBe(1);
            expect(arrayStacks.peek(1)).toBe(2);
        });
    });
});
