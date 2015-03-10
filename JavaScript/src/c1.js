var c1 = {
    isStringHasAllUniqueCharacters: function(str) {
        if (typeof str !== 'string') {
            throw new Error('Invalid argument: "str" should be a string.');
        }

        var hashTable = {},
            i = 0,
            l = str.length,
            char;

        for (; i < l; i += 1) {
            char = str.charAt(i);
            if (hashTable[char]) {
                return false;
            }

            hashTable[char] = true;
        }

        return true;
    },

    reverseString: function(str) {
        if (typeof str !== 'string') {
            throw new Error('Invalid argument: "str" should be a string.');
        }

        var reversedArray = [],
            l = str.length - 1,
            i = l;

        for (; i >= 0; i -= 1) {
            reversedArray[l - i] = str.charAt(i);
        }

        return reversedArray.join('');
    },

    removeDuplicateCharactersWithoutAdditionalMemory: function(str) {
        if (typeof str !== 'string') {
            throw new Error('Invalid argument: "str" should be a string.');
        }

        if (str.length < 2) {
            return str;
        }

        var i,
            ic,
            l,
            j,
            resultArray = [str.charAt(0)];

        for (i = 1, l = str.length; i < l; i += 1) {
            ic = str.charAt(i);
            for (j = 0; j < i; j += 1) {
                if (str.charAt(j) === ic) {
                    break;
                }
            }

            if (j === i) {
                resultArray.push(ic);
            }
        }

        return resultArray.join('');
    },

    removeDuplicateCharactersHashTable: function(str) {
        if (typeof str !== 'string') {
            throw new Error('Invalid argument: "str" should be a string.');
        }

        if (str.length < 2) {
            return str;
        }

        var hashTable = {},
            i = 0,
            l = str.length,
            char,
            resultArray = [];

        for (; i < l; i += 1) {
            char = str.charAt(i);
            if (!hashTable[char]) {
                resultArray.push(char);
                hashTable[char] = true;
            }
        }

        return resultArray.join('');
    }
};