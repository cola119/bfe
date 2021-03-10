// complete the implementation
class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare;
    this.data = [];
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.data.length;
  }

  /**
   * returns the head element
   */
  peek() {
    return this.data.length > 0 ? this.data[0] : undefined;
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    this.data[this.size()] = element;
    let pos = this.size() - 1;
    let parent = Math.floor((pos - 1) / 2);
    while (pos >= 0 && this.compare(this.data[pos], this.data[parent]) < 0) {
      this.swap(pos, parent);
      pos = parent;
      parent = Math.floor((pos - 1) / 2);
    }
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    const head = this.data.length > 0 ? this.data[0] : undefined;
    this.data[0] = this.data[this.size() - 1];
    this.data.pop();
    this.making(0);
    return head;
  }

  making(parent) {
    const left = 2 * parent + 1;
    const right = 2 * parent + 2;
    let largest = null;
    if (
      left < this.size() &&
      this.compare(this.data[left], this.data[parent]) < 0
    ) {
      largest = left;
    } else {
      largest = parent;
    }
    if (
      right < this.size() &&
      this.compare(this.data[right], this.data[largest]) < 0
    ) {
      largest = right;
    }
    if (largest !== parent) {
      this.swap(largest, parent);
      this.making(largest);
    }
  }

  swap(a, b) {
    const tmp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = tmp;
  }
}
