function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
    let curr = head
    let prev = null

    while(curr)
    {
        let next = curr.next   
        curr.next = prev       
        prev =  curr           
        curr = next  
    }
    return prev
};

// Example usage:
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

let reversedHead = reverseList(head)
let curr = reversedHead

while (curr) {
    console.log(curr.val) // Output: 5 4 3 2 1
    curr = curr.next
}