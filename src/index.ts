// import './algorithms/binarySearch.ts'
// import './algorithms/sort/bubbleSort.js'
// import './algorithms/sort/insertionSort.js'
// import "./algorithms/sort/quickSort.ts";
// import './algorithms/sort/mergeSort.js'
// import './misc/towerOfHonai.js'

// import './design_pattern/creational/builder/builder1.ts'
import './design_pattern/creational/factory/notification.ts'

// import "./design_pattern/creational/abstract_factory/example1/client.ts";
// import "./design_pattern/creational/abstract_factory/example2/ui2.ts";
// import "./design_pattern/structural/adaptor/adaptor1.ts";
// import "./design_pattern/structural/adaptor/adaptor2.ts";
// import "./design_pattern/structural/proxy/proxy.ts";
// import "./design_pattern/structural/proxy/proxy2.ts";
// import "./design_pattern/structural/decorator/decorator5.ts";
// import "./design_pattern/structural/decorator/decorator6.ts";
// import "./design_pattern/behavioral/strategy/strategy3.ts";
// import "./design_pattern/behavioral/command/example5.ts";
import './design_pattern/behavioral/momento/example2.ts'

// import "./data_structure/ds/CirculerQueue.ts";
// import "./leetCode/arrays/27.RemoveElement.ts";
// import "./leetCode/string/find1stOccurance.ts";
// import "./leetCode/string/567.PermutationInString.ts";
// import "./leetCode/string/findAllAnagramsInAString.ts";

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// Constraints:

// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums is sorted in a non-decreasing order.

// function maximumCount(nums: number[]) {
//   let neg = 0
//   let pos = 0

//   for (let n of nums) {
//     if (n === 0) continue
//     n > 0 ? pos++ : neg++
//   }

//   return neg >= pos ? neg : pos
// }

// console.log(maximumCount([-2, -1, -1, 1, 2, 3])) //3
// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])) //3
// console.log(maximumCount([5, 20, 66, 1314])) //4
// console.log(maximumCount([])) //0
// console.log(maximumCount([2])) //1
// console.log(maximumCount([0])) //0
// console.log(maximumCount([-1])) //1
