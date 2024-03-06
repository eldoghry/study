/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

// Solution 1
// function moveZeroes(nums: number[]): void {
//   let i = 0;
//   let j = i + 1;

//   while (j < nums.length) {
//     if (nums[i] !== 0 && nums[j] !== 0) {
//       i++;
//       j++;
//       continue;
//     }

//     if (nums[i] === 0 && nums[j] === 0) {
//       j++;
//       continue;
//     }

//     if (nums[i] === 0 && nums[j] !== 0) {
//       // swap
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i++;
//       j++;
//       continue;
//     }

//     i++;
//   }
// }

// Solution 2
function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== nonZeroIndex) {
        [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      }
      nonZeroIndex++;
    }
  }
}

moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]);
// moveZeroes([0]);
// moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, -1, 0, 3, -12]);
