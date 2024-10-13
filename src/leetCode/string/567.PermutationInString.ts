/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

// solution 1
// function checkInclusion(s1: string, s2: string): boolean {
//   let isPermutation = false;
//   if (!s1.length || !s2.length) return isPermutation;

//   let start = 0;
//   let window = s1.length;
//   let end = window - start - 1;

//   let mapS1: { [key: string]: number } = {};

//   for (let char of s1) mapS1[char] = (mapS1[char] || 0) + 1;

//   while (end < s2.length) {
//     if (isPermutation) break;

//     let map: { [key: string]: number } = { ...mapS1 };
//     // console.log({ map });

//     end = start;

//     while (end < window + start) {
//       if (map[s2[end]]) {
//         map[s2[end]]--;
//         !map[s2[end]] && delete map[s2[end]];
//       }

//       if (Object.keys(map).length === 0) {
//         isPermutation = true;
//         break;
//       }

//       end++;
//     }
//     start++;
//   }

//   return isPermutation;
// }

// solution 2
function checkInclusion(s1: string, s2: string): boolean {
  let isPermutation = false;
  let map: { [key: string]: number } = {};

  for (let i = 0; i < 26; i++) map[`${String.fromCharCode(97 + i)}`] = 0;
  let res: { [key: string]: number } = { ...map };

  // a: 97 | z: 122
  for (let char of s1) map[char] = (map[char] || 0) + 1;

  return isPermutation;
}
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("ab", "ab")); // true
console.log(checkInclusion("", "ab")); // true
