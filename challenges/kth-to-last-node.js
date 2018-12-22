/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
    let nextNode = head
    let count = 1;

    while (nextNode.next !== null) {
      count += 1;
      nextNode = nextNode.next;
    }

    let findNode = head;
    let kthPosition = count - k;
    i = 0
    
    while (findNode.value) {
      if (i === kthPosition) {
        console.log(i)
        return findNode.value;
      }
      findNode = findNode.next
      i += 1
    }
    
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(1, a))



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
