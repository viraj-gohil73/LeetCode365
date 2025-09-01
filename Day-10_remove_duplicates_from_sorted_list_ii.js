function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    let dummy  = new ListNode(0,head)
    let prev = dummy;

    while(head && head.next)
    {
        if(head.val === head.next.val)
        {
            while(head.next && head.val === head.next.val)
            {
                head = head.next
            }
            prev.next = head.next
        }
        else{
            prev = prev.next
        }
        head = head.next
    }
    return dummy.next
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(4)
head.next.next.next.next.next.next = new ListNode(5)

console.log(deleteDuplicates(head)) //[1,2,5]