(() => {
  class Queue {
    // FIFO Queue implementation
    private items: any[] = [];
    constructor() {}

    dequeue() {
      // O(n)
      return this.items.shift();
    }

    enqueue(element: any) {
      this.items.push(element);
    }

    peak() {
      return this.items.length === 0 ? null : this.items[0];
    }

    size() {
      return this.items.length;
    }

    print() {
      console.log(this.items.toString());
    }

    clear() {
      this.items = [];
    }
  }

  const stack = new Queue();
  stack.enqueue(1);
  stack.enqueue(2);
  stack.enqueue(3);

  console.log(stack.size()); // 3
  console.log(stack.dequeue()); // 1
  stack.print();
  console.log(stack.peak()); // 2
})();
