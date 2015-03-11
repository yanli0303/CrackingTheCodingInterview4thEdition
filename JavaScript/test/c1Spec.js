/* global c1: true */
var notStringValues = [undefined, null, 0, new Date(), [], {}, function () { }];

describe('isStringHasAllUniqueCharacters', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument, expects false', function () {
            expect(c1.isStringHasAllUniqueCharacters(str)).toBe(false);
        });
    });

    it('tests', function () {
        expect(c1.isStringHasAllUniqueCharacters('')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('a')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('ab')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('abcdefghijklmnopqrstuvwxyz')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('aba')).toBe(false);
        expect(c1.isStringHasAllUniqueCharacters('abcdefghijklmnopqrstuvwxyza')).toBe(false);
    });
});

describe('reverseString', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument: expects to do nothing', function () {
            expect(c1.reverseString(str)).toBe(str);
        });
    });

    it('tests', function () {
        expect(c1.reverseString('')).toEqual('');
        expect(c1.reverseString('a')).toEqual('a');
        expect(c1.reverseString('ab')).toEqual('ba');
        expect(c1.reverseString('abc')).toEqual('cba');
        expect(c1.reverseString('abcdefghijklmnopqrstuvwxyz')).toEqual('zyxwvutsrqponmlkjihgfedcba');
    });
});

describe('removeDuplicateCharactersWithoutAdditionalMemory', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument: expects do nothing', function () {
            expect(c1.removeDuplicateCharactersWithoutAdditionalMemory(str)).toBe(str);
        });
    });

    it('tests', function () {
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('')).toEqual('');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('a')).toEqual('a');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('ab')).toEqual('ab');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('abc')).toEqual('abc');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('abca')).toEqual('abc');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('aaa')).toEqual('a');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('aaabbb')).toEqual('ab');
        expect(c1.removeDuplicateCharactersWithoutAdditionalMemory('abcdefghijklmnopqrstuvwxyza')).toEqual('abcdefghijklmnopqrstuvwxyz');
    });
});

describe('removeDuplicateCharactersHashTable', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument: expects do nothing', function () {
            expect(c1.removeDuplicateCharactersHashTable(str)).toBe(str);
        });
    });

    it('tests', function () {
        expect(c1.removeDuplicateCharactersHashTable('')).toEqual('');
        expect(c1.removeDuplicateCharactersHashTable('a')).toEqual('a');
        expect(c1.removeDuplicateCharactersHashTable('ab')).toEqual('ab');
        expect(c1.removeDuplicateCharactersHashTable('abc')).toEqual('abc');
        expect(c1.removeDuplicateCharactersHashTable('abca')).toEqual('abc');
        expect(c1.removeDuplicateCharactersHashTable('aaa')).toEqual('a');
        expect(c1.removeDuplicateCharactersHashTable('aaabbb')).toEqual('ab');
        expect(c1.removeDuplicateCharactersHashTable('abcdefghijklmnopqrstuvwxyza')).toEqual('abcdefghijklmnopqrstuvwxyz');
    });
});

describe('areAnagramsXor', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument', function () {
            expect(c1.areAnagramsXor(str, str)).toBe(false);
            expect(c1.areAnagramsXor('normal string', str)).toBe(false);
            expect(c1.areAnagramsXor(str, 'normal string')).toBe(false);
        });
    });

    it('tests', function () {
        expect(c1.areAnagramsXor('', '')).toBe(false);
        expect(c1.areAnagramsXor('1', '')).toBe(false);
        expect(c1.areAnagramsXor('', '1')).toBe(false);

        expect(c1.areAnagramsXor('a', 'a')).toBe(true);
        expect(c1.areAnagramsXor('ab', 'ab')).toBe(true);
        expect(c1.areAnagramsXor('ab', 'ba')).toBe(true);
        expect(c1.areAnagramsXor('abc', 'acb')).toBe(true);
        expect(c1.areAnagramsXor('abc', 'cba')).toBe(true);
        expect(c1.areAnagramsXor('abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba')).toBe(true);
        expect(c1.areAnagramsXor('abcdefghijklmnopqrstuvwxyzc', 'zyxwvutsrqponmlkjihgfedcbaa')).toBe(false);
    });
});

describe('replaceWhiteSpaceWith', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument', function () {
            expect(c1.replaceWhiteSpaceWith(str, str)).toBe(str);
            expect(c1.replaceWhiteSpaceWith('normal string', str)).toEqual('normal string');
            expect(c1.replaceWhiteSpaceWith(str, 'normal string')).toBe(str);
        });
    });

    it('tests', function () {
        expect(c1.replaceWhiteSpaceWith('', '')).toEqual('');
        expect(c1.replaceWhiteSpaceWith('1', '')).toEqual('1');
        expect(c1.replaceWhiteSpaceWith('', '1')).toEqual('');

        expect(c1.replaceWhiteSpaceWith('a b', 'z')).toBe('azb');
        expect(c1.replaceWhiteSpaceWith(' a b', 'z')).toBe('zazb');
        expect(c1.replaceWhiteSpaceWith('a b ', 'z')).toBe('azbz');
        expect(c1.replaceWhiteSpaceWith(' a b ', 'z')).toBe('zazbz');
    });
});

describe('rotateMatrix90Degrees', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument', function () {
            expect(c1.rotateMatrix90Degrees(str)).toBe(str);
        });
    });

    it('tests', function () {
        expect(c1.rotateMatrix90Degrees([1, 3])).toEqual([
            [1],
            [3]
        ]);
        expect(c1.rotateMatrix90Degrees([
            [1],
            [3]
        ])).toEqual([
            [3, 1]
        ]);

        expect(c1.rotateMatrix90Degrees([
            [1, 2],
            [3, 4]
        ])).toEqual([
            [3, 1],
            [4, 2]
        ]);

        expect(c1.rotateMatrix90Degrees([
            [1, 2, 3],
            [4, 5, 6]
        ])).toEqual([
            [4, 1],
            [5, 2],
            [6, 3]
        ]);

        expect(c1.rotateMatrix90Degrees([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]);

        expect(c1.rotateMatrix90Degrees([
            [1, 2, 3, 4],
            [6, 7, 8, 9],
            [10, 11, 12, 13]
        ])).toEqual([
            [10, 6, 1],
            [11, 7, 2],
            [12, 8, 3],
            [13, 9, 4]
        ]);

        expect(c1.rotateMatrix90Degrees([
            [1, 2, 3, 4],
            [6, 7, 8, 9],
            [10, 11, 12, 13],
            [13, 14, 15, 16]
        ])).toEqual([
            [13, 10, 6, 1],
            [14, 11, 7, 2],
            [15, 12, 8, 3],
            [16, 13, 9, 4]
        ]);
    });
});

describe('setMatrixZero', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument', function () {
            expect(c1.setMatrixZero(str)).toBe(str);
        });
    });

    it('tests', function () {
        expect(c1.setMatrixZero([1, 3])).toEqual([1, 3]);
        expect(c1.setMatrixZero([
            [1],
            [3]
        ])).toEqual([
            [1],
            [3]
        ]);

        expect(c1.setMatrixZero([
            [0],
            [3]
        ])).toEqual([
            [0],
            [0]
        ]);

        expect(c1.setMatrixZero([
            [1],
            [0]
        ])).toEqual([
            [0],
            [0]
        ]);

        expect(c1.setMatrixZero([
            [1, 2],
            [0, 4]
        ])).toEqual([
            [0, 2],
            [0, 0]
        ]);

        expect(c1.setMatrixZero([
            [1, 0, 3],
            [4, 5, 6]
        ])).toEqual([
            [0, 0, 0],
            [4, 0, 6]
        ]);

        expect(c1.setMatrixZero([
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ])).toEqual([
            [1, 0, 3],
            [0, 0, 0],
            [7, 0, 9]
        ]);

        expect(c1.setMatrixZero([
            [1, 2, 3, 4],
            [0, 7, 8, 9],
            [10, 11, 12, 13]
        ])).toEqual([
            [0, 2, 3, 4],
            [0, 0, 0, 0],
            [0, 11, 12, 13]
        ]);

        expect(c1.setMatrixZero([
            [1, 2, 3, 4],
            [6, 0, 8, 9],
            [10, 11, 0, 13],
            [13, 14, 15, 16]
        ])).toEqual([
            [1, 0, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [13, 0, 0, 16]
        ]);
    });
});

describe('isRotationWith1CallToIsSubstring', function () {
    notStringValues.forEach(function (str) {
        it('Invalid argument', function () {
            expect(c1.isRotationWith1CallToIsSubstring(str, str)).toBe(false);
            expect(c1.isRotationWith1CallToIsSubstring('normal string', str)).toBe(false);
            expect(c1.isRotationWith1CallToIsSubstring(str, 'normal string')).toBe(false);
        });
    });

    it('tests', function () {
        expect(c1.isRotationWith1CallToIsSubstring('', '')).toBe(false);
        expect(c1.isRotationWith1CallToIsSubstring('1', '')).toBe(false);
        expect(c1.isRotationWith1CallToIsSubstring('', '1')).toBe(false);

        expect(c1.isRotationWith1CallToIsSubstring('a', 'a')).toBe(true);
        expect(c1.isRotationWith1CallToIsSubstring('ab', 'ab')).toBe(true);
        expect(c1.isRotationWith1CallToIsSubstring('ab', 'ba')).toBe(true);
        expect(c1.isRotationWith1CallToIsSubstring('abc', 'cab')).toBe(true);
        expect(c1.isRotationWith1CallToIsSubstring('abc', 'cba')).toBe(false);
        expect(c1.isRotationWith1CallToIsSubstring('abcdefghijklmnopqrstuvwxyz', 'defghijklmnopqrstuvwxyzabc')).toBe(true);
    });
});