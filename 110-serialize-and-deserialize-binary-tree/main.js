// This is the class for the node
// you can use this directly as it is bundled with your code

class Node {
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
  if (!root) return "[]";
  const values = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node ? node.value : null);
    if (node && (node.right || node.left)) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return `[${values.reduce((p, v) => (p === "" ? v : `${p},${v}`), "")}]`;
}
function test_serialize() {
  console.log(serialize()); // []
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
  if (str === "[]") return null;
  const values = str
    .match(/\[(.*)\]/)[1]
    .split(",")
    .map((s) => (s === "null" ? null : parseInt(s, 0)));
  const root = new Node(values.shift());
  const queue = [root];
  while (values.length > 0) {
    const node = queue.shift();
    if (!node) continue;
    const left = values.shift();
    const leftNode = left ? new Node(left) : null;
    node.left = leftNode;
    const right = values.shift();
    const rightNode = right ? new Node(right) : null;
    node.right = rightNode;
    queue.push(leftNode);
    queue.push(rightNode);
  }
  return root;
}
function test_deserialize() {
  console.log(serialize(deserialize("[]")));
  console.log(serialize(deserialize("[1]")));
  console.log(serialize(deserialize("[1,2]")));
  console.log(serialize(deserialize("[1,2,3]")));
  console.log(serialize(deserialize("[1,2,3,4]")));
  console.log(serialize(deserialize("[1,2,3,4,null,null,5]")));
  console.log(
    serialize(deserialize("[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]"))
  );
}

test_serialize();
test_deserialize();
