var c1 = {
    // Implement an algorithm to determine if a string has all unique characters.
    // What if you can not use additional data structures?
    isStringHasAllUniqueCharacters: function (str) {
        if (typeof str !== 'string') {
            return false;
        }

        if (!str) {
            return true;
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

    // Write code to reverse a C-Style String 
    // (C-String means that ¡°abcd¡± is represented as five characters, including the null character )
    reverseString: function (str) {
        if (typeof str !== 'string' || !str) {
            return str;
        }

        var reversedArray = [],
            l = str.length - 1,
            i = l;

        for (; i >= 0; i -= 1) {
            reversedArray[l - i] = str.charAt(i);
        }

        return reversedArray.join('');
    },

    // Design an algorithm and write code to remove the duplicate characters in a string
    // without using any additional buffer 
    // NOTE: One or two additional variables are fine, an extra copy of the array is not
    removeDuplicateCharactersWithoutAdditionalMemory: function (str) {
        if (typeof str !== 'string' || str.length < 2) {
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
    removeDuplicateCharactersHashTable: function (str) {
        if (typeof str !== 'string' || str.length < 2) {
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
    },

    // Write a method to decide if two strings are anagrams or not
    areAnagramsXor: function (str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string' || !str1 || str1.length !== str2.length) {
            return false;
        }

        var xor = 0,
            i;

        for (i = str1.length - 1; i >= 0; i -= 1) {
            xor ^= str1.charCodeAt(i);
        }

        for (i = str2.length - 1; i >= 0; i -= 1) {
            xor ^= str2.charCodeAt(i);
        }

        return xor === 0;
    },

    // Write a method to replace all spaces in a string with "%20"
    replaceWhiteSpaceWith: function (str, replacement) {
        if (typeof str !== 'string' || !str || typeof replacement !== 'string' || !replacement) {
            return str;
        }

        return str.replace(/\s/g, replacement);
    },

    // Given an image represented by an NxN matrix, where each pixel in the image is 4
    // bytes, write a method to rotate the image by 90 degrees Can you do this in place?
    rotateMatrix90Degrees: function (matrix) {
        if (!matrix || !matrix.length) {
            return matrix;
        }

        var rows = matrix.length,
            columns,
            rotatedMatrix = [],
            row,
            ri,
            ci;

        // a plain array as in [1, 2, 3]
        if (!matrix[0].length) {
            for (var i = 0, e; i < rows; i += 1) {
                e = matrix[i];
                rotatedMatrix[i] = [e];
            }

            return rotatedMatrix;
        }

        // matrix
        columns = matrix[0].length;
        for (ri = rows - 1; ri >= 0; ri -= 1) {
            row = matrix[ri];
            for (ci = 0; ci < columns; ci += 1) {
                if (ri === rows - 1) {
                    rotatedMatrix[ci] = [row[ci]];
                } else {
                    rotatedMatrix[ci].push(row[ci]);
                }
            }
        }

        return rotatedMatrix;
    },

    // Write an algorithm such that if an element in an MxN matrix is 0, 
    // its entire row and column is set to 0
    setMatrixZero: function (matrix) {
        if (!matrix || !matrix.length || !matrix[0].length) {
            return matrix;
        }

        var rows = matrix.length,
            columns = matrix[0].length,
            rowZeroPositions = [],
            columnZeroPositions = [],
            ri,
            ci;

        for (ri = 0; ri < rows; ri += 1) {
            for (ci = 0; ci < columns; ci += 1) {
                if (matrix[ri][ci] === 0) {
                    rowZeroPositions[ri] = 1;
                    columnZeroPositions[ci] = 1;
                }
            }
        }

        for (ri = 0; ri < rows; ri += 1) {
            for (ci = 0; ci < columns; ci += 1) {
                if (rowZeroPositions[ri] === 1 || columnZeroPositions[ci] === 1) {
                    matrix[ri][ci] = 0;
                }
            }
        }

        return matrix;
    },

    // Assume you have a method isSubstring which checks if one word is a substring of
    // another Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
    // only one call to isSubstring (i e , "waterbottle" is a rotation of "erbottlewat")
    isRotationWith1CallToIsSubstring: function (str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string' || !str1 || str1.length !== str2.length) {
            return false;
        }

        // indexOf is the isSubstring function
        return (str1 + str1).indexOf(str2) > -1;
    },

    // Write code to remove duplicates from an unsorted linked list
    // FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
    removeDuplicatesFromUnsortedLinkedList: function () {
        // it is the same as:
        // removeDuplicateCharactersHashTable
        // removeDuplicateCharactersWithoutAdditionalMemory
    }
};