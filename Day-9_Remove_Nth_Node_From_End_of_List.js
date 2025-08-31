function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let temp = head
    let len = 0;

    while(temp)
    {
        len++;
        temp = temp.next
    }

    let target = len - n;
    let dummy = new ListNode(0, head);
    temp = dummy;

    while(target > 0)
    {
        temp = temp.next
        target--;
    }
    temp.next = temp.next.next;
    
    return dummy.next
};

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
printList(head);// Output: 1 -> 2 -> 3 -> 4 -> 5
let n = 2;
let newHead = removeNthFromEnd(head, n);
printList(newHead); // Output: 1 -> 2 -> 3 -> 5