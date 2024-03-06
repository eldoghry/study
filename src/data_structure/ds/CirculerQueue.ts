(() => {
  class CirculerQueue {
    // FIFO Queue implementation
    private capacity: number;
    private head: number = -1;
    private tail: number = -1;
    private currentLength: number = 0;
    private items: any[] = [];

    constructor(capacity: number) {
      this.capacity = capacity;
      this.items = new Array(this.capacity);
    }

    enqueue(element: any) {
      if (this.isFull()) return null;

      this.currentLength++;
      this.tail = (this.tail + 1) % this.capacity;
      this.items[this.tail] = element;

      if (this.head === -1) {
        this.head = this.tail;
      }

      this.print();
      return element;
    }

    dequeue() {
      if (this.isEmpty()) return null;

      const element = this.items[this.head];
      this.items[this.head] = null;
      this.head = (this.head + 1) % this.capacity;
      this.currentLength--;

      if (this.isEmpty()) {
        this.head = -1;
        this.tail = -1;
      }

      this.print();
      return element;
    }

    isFull() {
      return this.currentLength === this.capacity;
    }

    isEmpty() {
      return this.currentLength === 0;
    }

    peak() {
      return this.isEmpty() ? null : this.items[this.head];
    }

    print() {
      console.log(
        `(head/tail/capacity/currentLength): (${this.head}/${this.tail}/${
          this.capacity
        }/${this.currentLength}) items: ${JSON.stringify(
          this.items
        )}, Peak: ${this.peak()}`
      );
    }
  }

  const q = new CirculerQueue(5);
  q.print();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  q.enqueue(6); // not added

  q.dequeue();
  q.enqueue(6);
  q.dequeue();
  q.dequeue();
  q.dequeue();
})();
