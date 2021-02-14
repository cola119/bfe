// This is the class for the node
// you can use this directly as it is bundled with your code

class Node {
  value;
  left;
  right;
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  // your code here
}
function test_serialize() {
  console.log(serialize(new Node(1))); // [1]
  console.log(serialize(new Node(1, new Node(2), new Node(3)))); // [1,2,3]
  console.log(
    serialize(
      new Node(1, new Node(2, new Node(4)), new Node(3, null, new Node(5)))
    )
  ); // [1,2,3,4,null,null,5]
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  // your code here
}
function test_deserialize() {
  console.log(deserialize("[1]"));
  console.log(deserialize("[1,2]"));
  console.log(deserialize("[1,2,3]"));
  console.log(deserialize("[1,2,3,4]"));
  console.log(deserialize("[1,2,3,4,null,null,5]"));
  console.log(deserialize("[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]"));
}
