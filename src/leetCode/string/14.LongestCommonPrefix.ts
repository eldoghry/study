/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings
*/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 1) return "";
  if (strs.length === 1) return strs[0];

  let prefix = "";
  let resultPrefix = "";
  let currentWord = strs[0];
  let i = 1;
  // "acc", "aaa", "aaba"
  while (i < strs.length) {
    if (currentWord[0] !== strs[i][0]) return ""; //no common currentWord

    let lengthOfSmallestWord =
      currentWord.length < strs[i].length ? currentWord.length : strs[i].length;

    let j = 0;

    while (j < lengthOfSmallestWord) {
      if (currentWord[j] === strs[i][j]) prefix += currentWord[j];
      else {
        prefix = prefix.slice(0, j);
        break;
      }
      j++;
    }

    if (resultPrefix.length > prefix.length || resultPrefix.length === 0) {
      resultPrefix = prefix;
    }

    prefix = "";
    currentWord = strs[i];
    i++;
  }

  return resultPrefix;
}

console.log(longestCommonPrefix(["acc", "aaa", "aaba"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["dog"]));
// console.log(longestCommonPrefix([]));
