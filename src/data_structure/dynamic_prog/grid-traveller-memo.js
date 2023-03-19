/* num of possibles way to travel from grid[0][0] to grid[row][col]*/

// function gridTraveler(row, col) {
//     if (row === 1 && col === 1) return 1
//     if (row < 1 || col < 1) return 0

//     return gridTraveler(row - 1, col) + gridTraveler(row, col - 1)
// }


function gridTraveler(row, col, memo = {}) {
    if (row === 1 && col === 1) return 1
    if (row < 1 || col < 1) return 0

    const key = `${row}, ${col}`
    if (memo[key]) return memo[key]

    memo[key] = gridTraveler(row - 1, col, memo) + gridTraveler(row, col - 1, memo)
    return memo[key]
}


console.log(gridTraveler(1, 0))   // 0
console.log(gridTraveler(1, 1))   // 1
console.log(gridTraveler(2, 3))   // 3
console.log(gridTraveler(3, 3))   // 6
console.log(gridTraveler(18, 18)) // 2333606220

