class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// List 1: 1 -> 3 -> 5
const l1 = new ListNode(1,
  new ListNode(3,
    new ListNode(5)
  )
);

// List 2: 2 -> 4 -> 6
const l2 = new ListNode(2,
  new ListNode(4,
    new ListNode(6)
  )
);

const mergeTwoLists = (list1, list2) => {
    let list = new ListNode(0);
    let head = list;

    while(list1 && list2){
        if(list1.val < list2.val){
            list.next = list1;
            list1 = list1.next;
        } else {
            list.next = list2;
            list2 = list2.next;
        }
        list = list.next;
    }

    if(list1 !== null) list.next = list1
    else list.next = list2

    return head.next;
};