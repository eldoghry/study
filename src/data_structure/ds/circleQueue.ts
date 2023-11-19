(() => {
  class CircleQueue {
    // FIFO Queue implementation
    private items: { [key: number]: any } = {};
    private head = 0;
    private tail = 0;
    private currentSize = 0;
    private max: number;

    constructor(max: number) {
      this.max = max;
    }

    enqueue(element: any) {
      if (!this.haveASeat()) return -1;

      this.items[this.tail] = element;
      this.tail++;
      this.currentSize++;
      return element;
    }

    dequeue() {
      if (this.currentSize !== 0) {
        this.currentSize--;
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
      }
    }

    // peak() {}

    print() {
      console.log(this.items);
    }

    clear() {
      this.items = {};
    }

    haveASeat() {
      return this.max > this.currentSize;
    }
  }

  const queue = new CircleQueue(4);

  queue.enqueue("oubai");
  queue.enqueue("mohamed");
  queue.enqueue("magdy");
  queue.enqueue("ali");
  console.log(queue.enqueue("obi")); // -1
  queue.print();

  queue.dequeue();
  queue.print();
  console.log(queue.enqueue("obi")); // obi
  console.log(queue.enqueue("obi")); // -1
  queue.print();

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.print();
  console.log(queue.dequeue());
})();
