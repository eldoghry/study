/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1. */

// using substring
// function strStr(haystack: string, needle: string): number {
//   let length = needle.length;

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       const sub = haystack.substring(i, i + length);
//       if (sub === needle) return i;
//     }
//   }

//   return -1;
// }

// using sliding window

function strStr(haystack: string, needle: string): number {
  if (!haystack || !needle) return -1;
  let hPointer = 0;
  let nPointer = 0;

  while (hPointer < haystack.length) {
    // console.log(hPointer, nPointer);
    if (haystack[hPointer + nPointer] === needle[nPointer]) {
      if (nPointer === needle.length - 1) return hPointer;
      nPointer++;
    } else {
      hPointer++;
      nPointer = 0;
    }
  }

  return -1;
}

console.log(strStr("leetcode", "leeto"));
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("mohamaf", "afg"));
