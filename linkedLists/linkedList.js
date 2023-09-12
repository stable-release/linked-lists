class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    get value() {
        return this.value;
    }

    get next() {
        return this.next;
    }
}

class LinkedList {
    /**
     * 
     * @param {Any} value 
     */
    constructor(value) {
        this.head = null;
        if (value) {

        }
    }

    /**
     * @returns {number} length of this linked list
     */
    get length() {
        let node = this.head;
        let count = 0;
        while(node) {
            count++;
            node = node.next;
        }

        return count;
    }

    /**
     * 
     * @param {(node: Node, index: number, this: LinkedList) => boolean} isMatch 
     * function that returns true for matching criteria
     * @returns {Node|null} Node when `isMatch => true`, or null when no match is found
     */
    find(isMatch) {
        return this.findWithPrevious(isMatch)[1];
    }

    /**
     * 
     * @param {(node: Node, index: number, this: LinkedList) => boolean} isMatch
     * function that returns true for matching criteria
     * @returns {[Node|null, Node|null]}
     * First element is Node when `isMatch => true`, or null when no match is found.
     * Second element is the previous node, or null when no match is found.
     * Second element is also null if the matched node is `this.head`.
     */
    findWithPrevious(isMatch) {
        let previous = null;
        let node = this.head;
        let index = 0;
        while (node) {
            if(isMatch(node, index, this)) {
                return [previous, node]
            }
            previous = node;
            node = node.next;
            index++;
        }

        return [null, null];
    }

    insert(value) {

    }
}

module.exports = LinkedList;