function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var oddEvenList = function(head) {
    if (!head || !head.next) return head;

    let odd_list = head;
    let even_list = head.next;
    let even_head = even_list;

    while(even_list && even_list.next)
    {
        odd_list.next = even_list.next;
        odd_list = odd_list.next;
        even_list.next = odd_list.next;
        even_list = even_list.next
    }
    odd_list.next = even_head;
    return head
};
let head = new ListNode(2,new ListNode(1,new ListNode(3,new ListNode(5,new ListNode(7))))
);

let result = oddEvenList(head);

// Print linked list
while (result) {
    console.log(result.val);
    result = result.next;
}