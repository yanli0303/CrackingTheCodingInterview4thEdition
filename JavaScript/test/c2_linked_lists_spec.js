/* global c2: true */
var notStringValues = [undefined, null, 0, new Date(), [], {}, function () { }];

describe('arrayToSinglyLinkedList', function () {
    it('test', function () {
        var singlyLinkedList = c2.arrayToSinglyLinkedList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(singlyLinkedList.head).toEqual(jasmine.any(Object));
        expect(singlyLinkedList.tail).toEqual(jasmine.any(Object));

        var node = singlyLinkedList.head,
            index = 0;
        while (node) {
            expect(node.value).toEqual(index);

            if (index < 9) {
                expect(node.next).toEqual(jasmine.any(Object));
            } else {
                expect(node.next).toBeUndefined();
            }

            index += 1;
            node = node.next;
        }

        expect(index).toEqual(10);
    });
});

describe('singlyLinkedListToArray', function () {
    it('test', function () {
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            singlyLinkedList = c2.arrayToSinglyLinkedList(arr);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual(arr);
    });
});

describe('removeDuplicatesFromUnsortedLinkedListHashTable', function () {
    var arr = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 1, 2, 3, 5, 9],
        singlyLinkedList;

    beforeEach(function () {
        singlyLinkedList = c2.arrayToSinglyLinkedList(arr);
    });

    it('Invalid Argument', function () {
        c2.removeDuplicatesFromUnsortedLinkedListHashTable(null);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual(arr);

        c2.removeDuplicatesFromUnsortedLinkedListHashTable(singlyLinkedList.tail);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.tail)).toEqual([9]);
    });

    it('test 1', function () {
        c2.removeDuplicatesFromUnsortedLinkedListHashTable(singlyLinkedList.head);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('test 2', function () {
        var linkedList = singlyLinkedList.head.next;
        c2.removeDuplicatesFromUnsortedLinkedListHashTable(linkedList);
        expect(c2.singlyLinkedListToArray(linkedList)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('removeDuplicatesFromUnsortedLinkedListWithoutAdditionalMemory', function () {
    var arr = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 1, 2, 3, 5, 9],
        singlyLinkedList;

    beforeEach(function () {
        singlyLinkedList = c2.arrayToSinglyLinkedList(arr);
    });

    it('Invalid Argument', function () {
        c2.removeDuplicatesFromUnsortedLinkedListWithoutAdditionalMemory(null);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual(arr);

        c2.removeDuplicatesFromUnsortedLinkedListWithoutAdditionalMemory(singlyLinkedList.tail);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.tail)).toEqual([9]);
    });

    it('test 1', function () {
        c2.removeDuplicatesFromUnsortedLinkedListWithoutAdditionalMemory(singlyLinkedList.head);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('test 2', function () {
        c2.removeDuplicatesFromUnsortedLinkedListWithoutAdditionalMemory(singlyLinkedList.head.next);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head.next)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('nthLastElementsOfSinglyLinkedList', function () {
    [''].concat(notStringValues).forEach(function (item) {
        it('Invalid Argument', function () {
            expect(c2.nthLastElementsOfSinglyLinkedList(item)).toBe(item);
        });
    });

    it('tests', function () {
        var singlyLinkedList = c2.arrayToSinglyLinkedList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).head;

        expect(c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, -1)).toBe(singlyLinkedList);
        expect(c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, 0)).toBe(singlyLinkedList);

        var last1 = c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, 1);
        expect(c2.singlyLinkedListToArray(last1)).toEqual([9]);

        var last2 = c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, 2);
        expect(c2.singlyLinkedListToArray(last2)).toEqual([8, 9]);

        var last3 = c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, 3);
        expect(c2.singlyLinkedListToArray(last3)).toEqual([7, 8, 9]);

        var all = c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, 10);
        expect(c2.singlyLinkedListToArray(all)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

        all = c2.nthLastElementsOfSinglyLinkedList(singlyLinkedList, 11);
        expect(c2.singlyLinkedListToArray(all)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('deleteMiddleNode', function () {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        singlyLinkedList = c2.arrayToSinglyLinkedList(arr);

    [null, singlyLinkedList.tail].forEach(function (middleNode) {
        it('Invalid Argument', function () {
            c2.deleteMiddleNode(middleNode);
            expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual(arr);
        });
    });

    it('tests', function () {
        var thirdNode = singlyLinkedList.head.next.next;

        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual(arr);
        expect(c2.singlyLinkedListToArray(thirdNode)).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);

        c2.deleteMiddleNode(thirdNode);
        expect(c2.singlyLinkedListToArray(singlyLinkedList.head)).toEqual([0, 1, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('addTwoNumbers', function () {
    it('Neither argument is valid', function () {
        expect(c2.addTwoNumbers(1, 2)).toBe(null);
    });

    it('Only one argument is valid', function () {
        var validArguement = {
            value: 1,
            next: { value: 2 }
        };

        expect(c2.addTwoNumbers(validArguement, 2)).toEqual(validArguement);
        expect(c2.addTwoNumbers(1, validArguement)).toEqual(validArguement);
    });

    it('tests', function () {
        var number99999 = c2.arrayToSinglyLinkedList([9, 9, 9, 9, 9]).head,
            number9876543210 = c2.arrayToSinglyLinkedList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).head,
            sum = c2.addTwoNumbers(number99999, number9876543210);

        expect(c2.singlyLinkedListToArray(sum)).toEqual([9, 0, 2, 3, 4, 6, 6, 7, 8, 9]);

        sum = c2.addTwoNumbers(number99999, number99999);
        expect(c2.singlyLinkedListToArray(sum)).toEqual([8, 9, 9, 9, 9, 1]);
    });
});

describe('findLoopStart', function () {
    [''].concat(notStringValues).forEach(function (item) {
        it('Invalid Argument', function () {
            expect(c2.findLoopStart(item)).toBe(null);
        });
    });

    var singlyLinkedList = (function (len) {
        var arr = [];
        while (arr.length < len) {
            arr.push(arr.length);
        }

        return c2.arrayToSinglyLinkedList(arr);
    }(100));

    function makeLoopSinglyLinkedList(head, tail, loopAt) {
        var i = 0,
            loopStart = head;

        for (; i < loopAt; i += 1) {
            loopStart = loopStart.next;
        }

        tail.next = loopStart;
    }

    it('makeLoopSinglyLinkedList', function () {
        expect(singlyLinkedList.head.value).toEqual(0);

        makeLoopSinglyLinkedList(singlyLinkedList.head, singlyLinkedList.tail, 0);
        expect(singlyLinkedList.tail.next.value).toEqual(0);

        makeLoopSinglyLinkedList(singlyLinkedList.head, singlyLinkedList.tail, 1);
        expect(singlyLinkedList.tail.next.value).toEqual(1);

        makeLoopSinglyLinkedList(singlyLinkedList.head, singlyLinkedList.tail, 2);
        expect(singlyLinkedList.tail.next.value).toEqual(2);

        makeLoopSinglyLinkedList(singlyLinkedList.head, singlyLinkedList.tail, 99);
        expect(singlyLinkedList.tail.next.value).toEqual(99);
    });

    it('No loop', function () {
        singlyLinkedList.tail.next = { value: 100 };
        expect(c2.findLoopStart(singlyLinkedList.head)).toBe(null);

        singlyLinkedList.tail.next = null;
        expect(c2.findLoopStart(singlyLinkedList.head)).toBe(null);
    });

    it('tests', function () {
        var actual, expected;

        for (var i = 0; i < 100; i += 1) {
            singlyLinkedList.tail.next = null;
            makeLoopSinglyLinkedList(singlyLinkedList.head, singlyLinkedList.tail, i);
            actual = c2.findLoopStart(singlyLinkedList.head);
            expected = singlyLinkedList.tail.next;

            expect(actual.value).toEqual(expected.value);
        }
    });
});