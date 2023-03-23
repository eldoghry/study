//* =============================================
//* compare adjacent elements in the array and swap the positions if they
//* are not in order, repeat through each element in arr
//* =============================================

// * Big O(n^2)
function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                const temp = arr[index];
                arr[index] = arr[index + 1]
                arr[index + 1] = temp;
                swapped = true
            }
        }
    } while (swapped);

    return arr
}

// console.log(bubbleSort([-6, 20, 8, -2, 4]));
// console.log(bubbleSort([-6, -8, -25]));
console.log(bubbleSort([10, 4]));
// console.log(bubbleSort([10]));
// console.log(bubbleSort([]));
