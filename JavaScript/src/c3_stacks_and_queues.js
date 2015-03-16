var c3 = {
    Stack: (function () {
        function Stack(data, max) {
            this.max = max > 0 ? max : 0;

            if (this.max > 0 && data && data.length > this.max) {
                throw new Error('The specified data has exceeded the max size.');
            }

            this.data = data || [];
        }

        Stack.prototype.push = function (newElement) {
            if (this.max > 0 && this.data.length >= this.max) {
                throw new Error('Stack is full!');
            }

            this.data.push(newElement);
        };

        Stack.prototype.pop = function () {
            var len = this.data.length;
            return len > 0 ? this.data.splice(len - 1, 1)[0] : null;
        };

        Stack.prototype.peek = function () {
            var len = this.data.length;
            return len > 0 ? this.data[len - 1] : null;
        };

        Stack.prototype.size = function () {
            return this.data.length;
        };

        return Stack;
    }()),

    // Use a single array to implement three stacks
    useSingleArrayImplementStacks: function (arr, stackCount) {
        function ArrayStacks(arr, stackCount) {
            this.arr = arr;
            this.stackCount = stackCount;
            this.topElements = []; // contains positions of top elements in "arr"
        }

        // gets or sets the position of top element in "arr" for specified stack
        ArrayStacks.prototype.stackTopElement = function (stackId, newTop) {
            if (stackId < 0 || stackId >= this.stackCount) {
                throw new Error('Invalid stack id!');
            }

            // set
            if (arguments.length > 1) {
                this.topElements[stackId] = newTop;
                return;
            }

            // get
            return this.topElements.length > stackId ? this.topElements[stackId] : null;
        };

        ArrayStacks.prototype.findMinVacantIndex = function () {
            for (var i = 0, l = this.arr.length; i < l; i += 1) {
                if (!this.arr[i]) {
                    return i;
                }
            }

            return i;
        };

        ArrayStacks.prototype.push = function (stackId, newValue) {
            var minVacantIndex = this.findMinVacantIndex();
            if (minVacantIndex >= this.arr.length) {
                throw new Error('No enough space to push!')
            }

            this.arr[minVacantIndex] = {
                value: newValue,
                prev: this.stackTopElement(stackId)
            };

            this.stackTopElement(stackId, minVacantIndex);
        };

        ArrayStacks.prototype.pop = function (stackId) {
            var topElementIndex = this.stackTopElement(stackId),
                topElement;

            // stack is empty
            if (null === topElementIndex) {
                return null;
            }

            topElement = this.arr[topElementIndex];
            this.stackTopElement(stackId, topElement.prev);
            delete this.arr[topElementIndex];

            return topElement.value;
        };

        ArrayStacks.prototype.peek = function (stackId) {
            var topElementIndex = this.stackTopElement(stackId);
            return null === topElementIndex ? null : this.arr[topElementIndex].value;
        };

        return new ArrayStacks(arr, stackCount);
    },

    // How would you design a stack which, in addition to push and pop, also has a function
    // min which returns the minimum element? Push, pop and min should all operate in
    // O(1) time
    minFunctionForStack: function (stack) {

    }
};