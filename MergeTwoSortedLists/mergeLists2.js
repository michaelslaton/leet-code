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
    const results = new ListNode();
    
};