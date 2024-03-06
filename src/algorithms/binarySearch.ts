// Big O (log n)
// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1 //3

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === target) {
//             return middleIndex
//         }

//         else if (target > arr[middleIndex]) {
//             leftIndex = middleIndex + 1;
//         }

//         else if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         }

//     }

//     return -1
// }

// // Big O (log n)
// function recursionBinarySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }

// // helper function
// function search(arr, target, leftIndex, rightIndex) {
//     if (arr.length < 1) return -1
//     if (leftIndex === rightIndex & arr[leftIndex] !== target) return -1
//     if (leftIndex > rightIndex) return -1

//     const middleIndex = Math.floor((leftIndex + rightIndex) / 2)

//     if (arr[middleIndex] === target) return middleIndex
//     else if (target > arr[middleIndex]) return search(arr, target, middleIndex + 1, rightIndex)
//     else return search(arr, target, leftIndex, middleIndex - 1)
// }

// console.log(binarySearch([-6, -2, 0, 3, 10, 19], 10)) //4
// console.log(binarySearch([-6, -2, 0, 3, 10, 19], -2)) // 1
// console.log(binarySearch([-6, -2, 0, 3, 10, 19], 9)) // -1
// console.log(binarySearch([-6, -2, 0, 3, 10, 19], 19)) // 5
// console.log(binarySearch([-6, -2, 0, 3], 9)) // -1

// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 10)) //4
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], -2)) // 1
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 9)) // -1
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 19)) // 5
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19, 22], 25)) // -1
// console.log(recursionBinarySearch([-6, -2, 0, 3], 9)) // -1
// console.log(recursionBinarySearch([], 9)) // -1
// console.log(recursionBinarySearch([1], 9)) // -1
// console.log(recursionBinarySearch([9], 9)) // 0

// function search(
//   arr: number[],
//   target: number,
//   leftIdx = 0,
//   rightIdx = arr.length - 1
// ): number {
//   console.log(start, end, Math.floor(end - start / 2), arr);
//   if (!end) return -1;
//   if () return 0;

//   const middleIdx = Math.floor(end - start / 2);
//   if (arr[middleIdx] === target) return middleIdx;

//   return arr[middleIdx] > target
//     ? search(arr, target, start, middleIdx)
//     : search(arr, target, middleIdx, end);
// }

function search(arr: number[], target: number, leftIdx = 0, rightIdx = arr.length - 1): number {
  if (!arr.length) return -1
  if (arr[leftIdx] === target) return leftIdx
  if (leftIdx >= rightIdx) return -1

  const middleIdx = Math.floor((rightIdx + leftIdx) / 2)
  const pivot = arr[middleIdx]
  if (pivot === target) return middleIdx

  // console.log(pivot, target)
  return target < pivot ? search(arr, target, leftIdx, middleIdx - 1) : search(arr, target, middleIdx + 1, rightIdx)
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 6)) //5
console.log(search([-6, -2, 0, 3, 4, 10, 19], 10)) //5
console.log(search([-6, -2, 0, 3, 10, 19], -2)) // 1
console.log(search([-6, -2, 0, 3, 10, 19], 9)) // -1
console.log(search([-6, -2, 0, 3, 10, 19], 19)) // 5
console.log(search([-6, -2, 0, 3], 9)) // -1
console.log(search([-6], 9)) // -1
console.log(search([9], 9)) // 0
console.log(search([], 9)) // -1

// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 10)) //4
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], -2)) // 1
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 9)) // -1
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19], 19)) // 5
// console.log(recursionBinarySearch([-6, -2, 0, 3, 10, 19, 22], 25)) // -1
// console.log(recursionBinarySearch([-6, -2, 0, 3], 9)) // -1
// console.log(recursionBinarySearch([], 9)) // -1
// console.log(recursionBinarySearch([1], 9)) // -1
// console.log(recursionBinarySearch([9], 9)) // 0
