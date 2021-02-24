class NodeStore {
  constructor() {
    this.cache = {};
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.cache[node] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.cache[node];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return typeof this.cache[node] !== "undefined";
  }
}
