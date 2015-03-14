var c2 = {
    arrayToSinglyLinkedList: function (values) {
        var headNode = {},
            prevNode = null,
            currentNode = headNode;

        values.forEach(function (value) {
            currentNode.value = value;
            if (prevNode) {
                prevNode.next = currentNode;
            }

            prevNode = currentNode;
            currentNode = {};
        });

        return {
            head: headNode,
            tail: prevNode
        };
    },

    singlyLinkedListToArray: function (headNode) {
        var values = [];

        while (headNode) {
            values.push(headNode.value);
            headNode = headNode.next;
        }

        return values;
    },

    // Write code to remove duplicates from an unsorted linked list
    // FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
    removeDuplicatesFromUnsortedLinkedList: function () {
        // it is the same as:
        // removeDuplicateCharactersHashTable
        // removeDuplicateCharactersWithoutAdditionalMemory
    },

    // Implement an algorithm to find the nth to last element of a singly linked list
    // Assume the way to get next node is: node.next
    nthLastElementsOfSinglyLinkedList: function (headNode, n) {
        if (!headNode || !headNode.next || n <= 0) {
            return headNode;
        }

        var head = headNode,
            nthHead = headNode,
            offset = 0;

        while (head) {
            head = head.next;
            if (offset < n) {
                offset += 1;
            } else {
                nthHead = nthHead.next;
            }
        }

        return nthHead;
    },

    // Implement an algorithm to delete a node in the middle of a single linked list,
    // given only access to that node
    deleteMiddleNode: function (middleNode) {
        // not in the middle
        if (!middleNode || !middleNode.next) {
            return;
        }

        var next = middleNode.next;
        middleNode.value = next.value;
        middleNode.next = next.next;

        next.next = null;
    },

    // You have two numbers represented by a linked list, where each node contains a 
    // single digit The digits are stored in reverse order, such that the 1¡¯s digit 
    // is at the head of the list Write a function that adds the two numbers and 
    // returns the sum as a linked list
    addTwoNumbers: function (left, right) {
        var leftIsValid = typeof left === 'object' && left.hasOwnProperty('value'),
            rightIsValid = typeof right === 'object' && right.hasOwnProperty('value');

        if (!(leftIsValid || rightIsValid)) {
            return null;
        }

        if (!leftIsValid || !rightIsValid) {
            return leftIsValid ? left : right;
        }

        var current = {},
            prev = null,
            result = current,
            sum = 0,
            carry = 0;

        while (left || right || carry) {
            sum = (left ? left.value : 0) + (right ? right.value : 0) + carry;
            current.value = sum % 10;
            carry = Math.floor(sum / 10);

            left = left ? left.next : null;
            right = right ? right.next : null;
            if (prev) {
                prev.next = current;
            }

            prev = current;
            current = {};
        }

        return result;
    },

    // Given a circular linked list, implement an algorithm which returns node at 
    // the beginning of the loop
    findLoopStart: function (headNode) {
        if (!headNode || !headNode.next) {
            return null;
        }

        var v1 = headNode,
            v2 = headNode;

        // v1 advances 1 node in each loop
        // v2 advances 2 nodes in each loop
        // finally they'll meet
        do {
            v1 = v1.next;
            v2 = v2.next ? v2.next.next : null;
        } while (v1 && v2 && v1 !== v2);

        // no loop found
        if (!v1 || !v2) {
            return null;
        }

        // move v1 to the headNode
        // now, both v1 and v2 advance 1 node in each loop
        // and they'll meet at the loop start
        v1 = headNode;
        do {
            v1 = v1.next;
            v2 = v2.next;
        } while (v1 !== v2);

        return v1;
    }
};