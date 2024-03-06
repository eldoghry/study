/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];
  const windowSize = p.length;
  let start = 0;
  let end = start;
  let res = [];
  let map: { [key: string]: number } = {};

  for (let char of p) map[char] = (map[char] || 0) + 1;

  while (start < s.length) {
    const map2 = { ...map };
    // console.log(map2);
    end = start;

    while (end < start + windowSize) {
      if (!map2[s[end]]) break;

      if (map2[s[end]]) {
        map2[s[end]]--;
        !map2[s[end]] && delete map2[s[end]];
      }

      if (!Object.keys(map2).length) {
        res.push(start);
        break;
      }

      end++;
    }

    if (!Object.keys(map2).length) {
      start += windowSize - 1;
    } else start++;
  }

  return res;
}

console.log(findAnagrams("baa", "aa"));
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
