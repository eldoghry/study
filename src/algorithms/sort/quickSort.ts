/*
idea: 
choose pivot el then compare all remain with it 
if it < pivot added to left arr if > pivot added to right
repeat steps until arr length is 1
then concat all results together in one array  
*/

//* worst case -> Big O(n^2) if array all ready sorted
//* avg case -> Big O(nlogn)

function quickSortOld(arr: number[]) {
  if (arr.length < 2) return arr;

  const left = [];
  const right = [];
  const pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// sorting ascending or descending
function quickSort(arr: number[], order: "asc" | "dsc" = "asc"): number[] {
  if (arr.length <= 1) return arr;

  const middleIdx = Math.floor(arr.length / 2);
  const pivot = arr[middleIdx];
  const left: number[] = [];
  const right: number[] = [];

  arr.forEach((x, i) => {
    if (i !== middleIdx && x > pivot) right.push(x);
    if (i !== middleIdx && x < pivot) left.push(x);
  });

  if (order === "asc")
    return [...quickSort(left, order), pivot, ...quickSort(right, order)];
  else return [...quickSort(right, order), pivot, ...quickSort(left, order)];
}

console.log(quickSort([4, 2, 5, 3, 6, 9], "dsc"));
console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([6, 2, 9]));
console.log(quickSort([11, 9]));
console.log(quickSort([11, 9, 3]));
console.log(quickSort([11, 9, 3, 0]));
console.log(quickSort([-6, 20, 8, -2, 4]));
