function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteNode = (node) => {
    node.val = node.next.val
    node.next = node.next.next
};

// Example usage:
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);
deleteNode(head.next); // Deleting node with value 5
console.log(head); // Output: Linked list is now 4 -> 1 -> 9