describe('isStringHasAllUniqueCharacters', function() {
    var invalidArgumentError = 'Invalid argument: "str" should be a string.';

    beforeEach(function() {
        spyOn(c1, 'isStringHasAllUniqueCharacters').and.callThrough();
    });

    [undefined, null, 0, new Date(), [], {}, function() {}].forEach(function(str) {
        it('Invalid argument: throws error', function() {
            expect(function() {
                c1.isStringHasAllUniqueCharacters(str);
            }).toThrowError(invalidArgumentError);
        });
    });


    it('empty string expects true', function() {
        // empty string
        expect(c1.isStringHasAllUniqueCharacters('')).toBe(true);
    });

    it('tests', function() {
        expect(c1.isStringHasAllUniqueCharacters('a')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('ab')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('abcdefghijklmnopqrstuvwxyz')).toBe(true);
        expect(c1.isStringHasAllUniqueCharacters('aba')).toBe(false);
        expect(c1.isStringHasAllUniqueCharacters('abcdefghijklmnopqrstuvwxyza')).toBe(false);
    });
});

describe('reverseString', function() {
    var invalidArgumentError = 'Invalid argument: "str" should be a string.';

    beforeEach(function() {
        spyOn(c1, 'reverseString').and.callThrough();
    });

    [undefined, null, 0, new Date(), [], {}, function() {}].forEach(function(str) {
        it('Invalid argument: throws error', function() {
            expect(function() {
                c1.reverseString(str);
            }).toThrowError(invalidArgumentError);
        });
    });

    it('tests', function() {
        expect(c1.reverseString('')).toEqual('');
        expect(c1.reverseString('a')).toEqual('a');
        expect(c1.reverseString('ab')).toEqual('ba');
        expect(c1.reverseString('abc')).toEqual('cba');
        expect(c1.reverseString('abcdefghijklmnopqrstuvwxyz')).toEqual('zyxwvutsrqponmlkjihgfedcba');
    });
});

describe('removeDuplicateCharactersWithoutAdditionalMemory', function() {
    var invalidArgumentError = 'Invalid argument: "str" should be a string.';

    beforeEach(function() {
        spyOn(c1, 'removeDuplicateCharactersWithoutAdditionalMemory').and.callThrough();
    });

    [undefined, null, 0, new Date(), [], {}, function() {}].forEach(function(str) {
        it('Invalid argument: throws error', function() {
            expect(function() {
                c1.removeDuplicateCharactersWithoutAdditionalMemory(str);
            }).toThrowError(invalidArgumentError);
        });
    });

    it('tests', function() {
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

describe('removeDuplicateCharactersHashTable', function() {
    var invalidArgumentError = 'Invalid argument: "str" should be a string.';

    beforeEach(function() {
        spyOn(c1, 'removeDuplicateCharactersHashTable').and.callThrough();
    });

    [undefined, null, 0, new Date(), [], {}, function() {}].forEach(function(str) {
        it('Invalid argument: throws error', function() {
            expect(function() {
                c1.removeDuplicateCharactersHashTable(str);
            }).toThrowError(invalidArgumentError);
        });
    });

    it('tests', function() {
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