/**
 * virtually split the array into sorted and unsorted part
 * assume that first el A is sorted and the other unsorted
 * select unsorted el B and compare it with sorted part
 * if A < B proceed to next unsorted element new B
 * A > B shift large ele in Sorted part to the right and insert B -> [B, A]
 * repeat until all sorted part are inserted
 */


function insertionSort(arr) {

}
console.log(insertionSort([-6, 20, 8, -2, 4]));
