/* 
You are given two non-increasing 0-indexed integer arrays nums1​​​​​​ and nums2​​​​​​.

A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length, is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i​​​​.

Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.

An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.


Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
Output: 2
Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).

Input: nums1 = [2,2,2], nums2 = [10,10,1]
Output: 1
Explanation: The valid pairs are (0,0), (0,1), and (1,1).
The maximum distance is 1 with pair (0,1).

Input: nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]
Output: 2
Explanation: The valid pairs are (2,2), (2,3), (2,4), (3,3), and (3,4).
The maximum distance is 2 with pair (2,4).
*/

//two pointer solution
//time O(n)
function maxDistance(nums1, nums2) {
  let i = 0,
    j = 0,
    maxDist = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      i++;
    } else {
      maxDist = Math.max(maxDist, j - i);
      j++;
    }
  }

  return maxDist;
}

//binary search
//O(n log m)
function maxDistance2(nums1, nums2) {
  let maxDist = 0;
  for (let i = 0; i < nums1.length; i++) {
    let lo = i,
      hi = nums2.length - 1;
    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (nums2[mid] >= nums1[i]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    if (lo > i) {
      maxDist = Math.max(maxDist, lo - i - 1);
    }
  }
  return maxDist;
}
