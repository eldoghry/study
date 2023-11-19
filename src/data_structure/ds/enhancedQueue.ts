(() => {
  class EnhancedQueue {
    // FIFO Queue implementation
    private items: { [key: number]: any } = {};
    private head = 0;
    private tail = 0;

    constructor() {}

    enqueue(element: any) {
      this.items[this.tail] = element;
      this.tail++;
    }

    dequeue() {
      // O(1)
      const item = this.items[this.head];
      delete this.items[this.head];
      this.head++;
      return item;
    }

    peak() {
      return this.size() > 0 ? this.items[this.head] : null;
    }

    size() {
      return this.tail - this.head;
    }

    print() {
      console.log(this.items);
    }

    clear() {
      this.items = {};
    }
  }

  const stack = new EnhancedQueue();
  console.log(stack.peak()); // null

  stack.enqueue("mohamed");
  stack.enqueue("magdy");
  stack.enqueue("ali");

  console.log(stack.size()); // 3
  stack.print();
  console.log(stack.dequeue()); // mohamed
  stack.print(); // magdy, ali
  console.log(stack.peak()); //magdy

  console.log(stack.dequeue()); // magdy
  console.log(stack.dequeue()); // ali
  console.log(stack.dequeue()); // mohamed
})();
