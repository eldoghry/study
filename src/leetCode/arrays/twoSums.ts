function twoSum(nums: number[], target: number) {
  const objArr = nums.map((value, index) => {
    return { value, index };
  });

  const sorted = objArr.sort((a, b) => {
    return a.value - b.value;
  });

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const total = sorted[left].value + sorted[right].value;
    if (total === target) {
      return [sorted[left].index, sorted[right].index];
    } else if (total > target) {
      right--;
      continue;
    } else {
      left++;
      continue;
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
