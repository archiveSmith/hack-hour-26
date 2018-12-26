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

// function kthToLastNode(k, head) {
//   let current = head;
//   let holder = [];
//   while(current !== null){
//     holder.push(current.value);
//     if(holder.length > k){
//       holder.shift()
//     }
//     current = current.next;
//   }
//   return holder[0];

// }

function kthToLastNode(k, head){
  let current = 'head';
  let next = '.next'.repeat(k);
  while(eval(current+next) !== null){
    current = current+'.next';
  }

  return eval(current).value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
