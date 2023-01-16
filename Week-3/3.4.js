function createStack() {
  const items = [];
    return {
        push(item) {
            items.push(item)
        },
        pop() {
            return items.pop();
        },
        display() {
            return items
        }
    };
}

const stack = Object.freeze(createStack())
console.log(stack)
stack.push(10)
stack.push(5)
console.log(stack.pop())
stack.items = [10, 12, 13]
console.log(stack.items)
stack.push(4)
console.log(stack.items)

console.log(stack.display())
