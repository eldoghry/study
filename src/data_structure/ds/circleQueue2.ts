(() => {
  class CircleQueue {
    // FIFO Queue implementation
    private items: any[] = [];
    private head = -1;
    private tail = -1;
    private currentSize = 0;
    private capacity: number;

    constructor(capacity: number) {
      this.capacity = capacity;
      this.items = new Array(this.capacity);
    }

    enqueue(element: any) {
      if (this.isFull()) return null;

      this.currentSize++;
      this.tail = (this.tail + 1) % this.capacity;
      this.items[this.tail] = element;
      this.head === -1 ? this.head++ : null;
      this.print();
      return element;
    }

    dequeue() {
      if (this.isEmpty()) return null;

      const element = this.items[this.head];
      this.items[this.head] = null;
      this.currentSize--;

      this.head = (this.head + 1) % this.capacity;

      if (this.isEmpty()) {
        this.head = -1;
        this.tail = -1;
      }
      this.print();
      return element;
    }

    peak() {
      return this.currentSize > 0 ? this.items[this.head] : null;
    }

    print() {
      console.log(
        `Head: ${this.head}, Tail: ${this.tail}, Capacity: ${this.currentSize}, Items: ${this.items}`
      );
    }

    clear() {
      this.items = new Array(this.capacity);
      this.head = -1;
      this.tail = -1;
      this.currentSize = 0;
    }

    isFull() {
      return this.currentSize === this.capacity;
    }

    isEmpty() {
      return this.currentSize === 0;
    }
  }

  const queue = new CircleQueue(5);
  //   queue.print();
  console.log("=========================================");
  console.log("isEmpty: ", queue.isEmpty());
  console.log("isFull: ", queue.isFull());

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(queue.peak()); // 1
  //   console.log(queue.enqueue("not added")); // null

  queue.dequeue(); // 1
  queue.dequeue(); // 2
  console.log(queue.peak()); // 3
  queue.enqueue(6);
  queue.enqueue(7);
  //   queue.dequeue();
  //   queue.dequeue();
  queue.print();
  queue.clear();
  queue.dequeue();
  queue.enqueue(8);
  queue.enqueue(9);
  queue.dequeue();
  queue.dequeue();
  queue.enqueue(10);
  queue.enqueue(11);
})();
