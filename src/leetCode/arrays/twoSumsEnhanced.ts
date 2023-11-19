(() => {
  function twoSum(nums: number[], target: number) {
    // Using Hash table
    const seen: { [key: string]: number } = {};

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (seen.hasOwnProperty(diff)) {
        return [seen[diff], i];
      }

      seen[nums[i]] = i;
    }
  }
  // 3:0 2:1
  console.log(twoSum([3, 2, 4], 6));
})();
