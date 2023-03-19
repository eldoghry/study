function Stack() {
    this.collection = []
    this.count = 0;

    this.push = function (element) {
        this.collection = [element, ...this.collection]
        this.count++;
        return element
    }

    this.pop = function () {

        if (!this.count) return null

        const element = this.collection.shift()
        this.count--;
        return element
    }

    this.size = function () {
        return this.count
    }

    this.print = function () {
        console.log(this.collection)
    }
}


const stack = new Stack()
console.log(stack.pop())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()

console.log(stack.size())
stack.print()
console.log(stack.collection)