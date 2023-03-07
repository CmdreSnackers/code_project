//Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

/*
Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3



Input: nums = [4,2,3,4]
Output: 4



*/

//two pointer
//O(n)
function triangleNumber(nums) {
  nums.sort((a, b) => a - b); // sort non-decreasing
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      count += k - j - 1;
    }
  }
  return count;
}

//binary search
//O(n^2 log n)
function triangleNumber2(nums) {
  let count = 0;
  nums.sort((a, b) => a - b); // sort
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) continue; // if  0 move on
    let k = i + 2; // k is index of third
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] === 0) continue; // if 0, move on
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        // search
        k++;
      }
      count += k - j - 1; // add triangles
    }
  }
  return count;
}
