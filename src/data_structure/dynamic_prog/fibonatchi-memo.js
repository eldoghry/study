// less performance 
// function fibonacci(num) {
//     if (num <= 2) return 1
//     return fibonacci(num - 1) + fibonacci(num - 2)
// }

/* save num as key and result as value in memo object */
function fibonacci(num, memo = {}) {
    if (num <= 2) return 1
    if (memo[num]) return memo[num]

    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num]
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(7))
console.log(fibonacci(47)) // take long time
