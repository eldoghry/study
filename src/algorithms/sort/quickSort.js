
/*
idea: 
choose pivot el then compare all remain with it 
if it < pivot added to left arr if > pivot added to right
repeat steps until arr length is 1
then concat all results together in one array  
*/

//* worst case -> Big O(n^2) if array all ready sorted 
//* avg case -> Big O(nlogn)

function quickSort(arr) {
    if (arr.length < 2) return arr

    const left = []
    const right = []
    const pivot = arr[arr.length - 1]

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= pivot) right.push(arr[i])
        else left.push(arr[i])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}


console.log(quickSort([-6, 20, 8, -2, 4]));
