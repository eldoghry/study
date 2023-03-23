// Big O (log n)
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1 //3

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] === target) {
            return middleIndex
        }

        else if (target > arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        }

        else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        }

    }

    return -1
}

// Big O (log n)
function recursionBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

// helper function 
function search(arr, target, leftIndex, rightIndex) {
    if (arr.length < 1) return -1
    if (leftIndex === rightIndex & arr[leftIndex] !== target) return -1
    if (leftIndex > rightIndex) return -1

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (arr[middleIndex] === target) return middleIndex
    else if (target > arr[middleIndex]) return search(arr, target, middleIndex + 1, rightIndex)
    else return search(arr, target, leftIndex, middleIndex - 1)
}

// console.log(binarySearch([-6, -2, 0, 3, 10, 19], 10)) //4
// console.log(binarySearch([-6, -2, 0, 3, 10, 19], -2)) // 1
// console.log(binarySearch([-6, -2, 0, 3, 10, 19], 9)) // -1
// console.log(binarySearch([-6, -2, 0, 3, 10, 19], 19)) // 5
// console.log(binarySearch([-6, -2, 0, 3], 9)) // -1

console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 10)) //4
console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], -2)) // 1
console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 9)) // -1
console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 19)) // 5
console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19, 22], 25)) // -1
console.log(recursionBinarySearch([-6, -2, 0, 3], 9)) // -1
console.log(recursionBinarySearch([], 9)) // -1
console.log(recursionBinarySearch([1], 9)) // -1
console.log(recursionBinarySearch([9], 9)) // 0
