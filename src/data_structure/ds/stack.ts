(() => {
  class Stack {
    // LIFO stack implementation
    private items: any[] = [];
    constructor() {}

    pop() {
      return this.items.pop();
    }

    push(element: any) {
      this.items.push(element);
    }

    peak() {
      return this.items[this.items.length - 1];
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

  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log(stack.size()); // 3
  console.log(stack.pop()); // 3
  console.log(stack.peak()); // 2
  stack.print();
})();
