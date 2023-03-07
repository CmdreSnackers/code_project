/*
A split of an integer array is good if:

The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.
Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.

Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].

Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]

Input: nums = [3,2,1]
Output: 0
Explanation: There is no good way to split nums.
*/

//binary
// % 1000000007 to prevent interger overflow
function waysToSplit(nums) {
  for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];
  let sum = nums[nums.length - 1];
  if (!sum) return (((nums.length - 2) * (nums.length - 1)) / 2) % 1000000007;

  let res = 0;
  let aver = ~~(sum / 3);

  for (let i = 0, j = 1, k = 1; nums[i] <= aver; i++) {
    while (nums[j] - nums[i] < nums[j] / 2) j++;

    if (i === j) j++;

    while (sum - nums[k] >= nums[k] - nums[i] && k < nums.length - 1) k++;

    res += k - j;
  }
  return res % 1000000007;
}
