
/*
idea: 
divide arr to left right
repeat until left length and right length are 1 

const sortedArr = []
merge left with right 
check if left[0] < right[0] then push left[0] else right[0]
repeat this steps until left or rigth length is zero
then push the remaining to sorted

*/

// BigO (nlogn)
function mergeSort(arr) {
    if (arr.length < 2) return arr

    const midIndex = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, midIndex)
    const rightArr = arr.slice(midIndex)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([-6, 20, 8, -2, 4]));
console.log(mergeSort([-6]));
console.log(mergeSort([-6, -10]));
console.log(mergeSort([]));
