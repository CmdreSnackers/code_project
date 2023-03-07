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

console.log(triangleNumber([2, 2, 3, 4]));
/*
The first step is to sort the input array in non-decreasing order. 
This is because we need to check for valid triangle numbers, 
which means that the sum of any two sides of the triangle must be greater than the third side. 
Sorting the array helps us to identify the largest side, which makes it easier to check for valid combinations of sides.

We initialize a variable count to keep track of the number of valid triangles we find.

We loop through the array starting from the third element, since we need at least three sides to form a triangle.

For each element nums[i], we initialize two pointers left and right. 
left starts at the beginning of the array, while right starts at i - 1.

We then use a while loop to move the left and right pointers towards each other. 
This is where the two-pointer approach comes into play.

We check if nums[left] + nums[right] > nums[i]. If this is true, 
then we know that we have found a valid triangle. 
The reason for this is that the array is sorted in non-decreasing order, 
so any nums[k] where left < k < right will also satisfy the condition nums[k] + nums[right] > nums[i]. Therefore, 
we can count all the valid triangles at once by adding right - left to count.

If nums[left] + nums[right] <= nums[i], 
then we need to move the left pointer to the right, 
since increasing nums[left] will not result in a valid triangle.

We repeat steps 6 and 7 until left and right cross each other.

We return the final value of count, 
which represents the total number of valid triangles in the array.
*/

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

/*
We first initialize a count variable to 0, which will be used to keep track of the number of valid triangles.

We then sort the input array in ascending order using the sort() method. 
This is because we need to check if nums[i] + nums[j] > nums[k], and if nums is not sorted, 
we may miss some valid triangles.

We then iterate over the array using a nested for loop. 
The outer loop iterates over the first element of the triplet (nums[i]), 
while the inner loop iterates over the second element of the triplet (nums[j]).

We check if nums[i] or nums[j] is equal to 0. If it is, we skip to the next element to avoid unnecessary computations.

We initialize k to be the index of the third element of the triplet (nums[k]). Since the array is sorted, 
we know that nums[k] will be greater than or equal to nums[j].

We then use a while loop to perform binary search for the largest k such that nums[i] + nums[j] > nums[k]. 
We start k at j + 1 because we need to ensure that nums[i] < nums[j] < nums[k]. 
The while loop terminates when k reaches the end of the array or when nums[i] + nums[j] <= nums[k].

We add the number of valid triangles that can be formed with nums[i] and nums[j] to the count variable. 
The number of valid triangles can be calculated as k - j - 1, 
since k is the index of the first element that fails the condition nums[i] + nums[j] > nums[k], 
and we need to subtract 1 to exclude nums[k] from the count.

Finally, we return the count variable as the result.
*/
