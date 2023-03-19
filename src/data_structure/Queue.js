function Queue() {
    this.collection = []
    this.count = 0;

    // add element to queue
    this.enqueue = function (element) {
        this.collection.push(element)
        this.count++;

        return element
    }

    // remove first element from the queue
    this.dequeue = function () {

        if (this.count < 1) return null

        const element = this.collection.shift()
        this.count--;

        return element
    }

    // clear queue
    this.clear = function () {
        this.collection = []
        this.count = 0
        return this.collection
    }

    this.print = function () {
        console.log(this.collection)
    }

    // get element by index
    this.get = function (index) {
        return this.collection[index]
    }

}

const queue = new Queue()
// queue.dequeue() 


queue.dequeue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
