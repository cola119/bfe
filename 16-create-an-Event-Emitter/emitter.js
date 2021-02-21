// please complete the implementation
class EventEmitter {
  constructor() {
    this.callbacks = new Map();
  }

  subscribe(eventName, callback) {
    const subscriber = this.callbacks.get(eventName) || [];
    subscriber.push(callback);
    this.callbacks.set(eventName, subscriber);
    return { release: () => subscriber.pop() };
  }

  emit(eventName, ...args) {
    const callbacks = this.callbacks.get(eventName) || [];
    for (const cb of callbacks) {
      cb(...args);
    }
  }
}
