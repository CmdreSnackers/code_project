/*
Winter is coming! During the contest, 

your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of houses and heaters on a horizontal line, 

return the minimum radius standard of heaters so that those heaters could cover all houses.

Notice that all the heaters follow your radius standard, and the warm radius will the same.

Input: houses = [1,2,3], heaters = [2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.

Input: houses = [1,5], heaters = [2]
Output: 3
*/

//binary search
//O(n log m)
function findRadius(houses, heaters) {
  heaters.sort((a, b) => a - b); // ascending
  let radius = 0;
  for (let i = 0; i < houses.length; i++) {
    let house = houses[i];
    let left = 0;
    let right = heaters.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (heaters[mid] < house) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    let distance = Math.abs(house - heaters[left]); // calculate distance between house and heater
    if (distance > radius) {
      radius = distance; // update
    }
  }
  return radius;
}

/*
We start by sorting the heaters in ascending order, so that we can perform binary search on them later.
This will help us find the closest heater to each house efficiently.

We initialize the radius to 0, and loop through each house in the houses array.

For each house, we perform binary search on the heaters to find the closest heater to the house.
 We use two pointers, left and right, to keep track of the range of heaters we are searching. 
 We initialize left to 0 and right to heaters.length - 1,
 and keep iterating until left and right converge (i.e., left >= right).

In each iteration of the binary search, we calculate the middle index mid as (left + right) / 2, 
and compare the value at heaters[mid] with the value of the current house. If heaters[mid] is less than house, 
we update left to mid + 1, because the closest heater must be to the right of mid. Otherwise, we update right to mid, 
because the closest heater must be to the left of mid or at mid itself.

After the binary search, we have found the closest heater to the current house. 
We calculate the distance between the house and the closest heater using Math.abs(house - heaters[left]), 
and update the maximum radius if necessary. 
The maximum radius is the distance between the house and the closest heater that is farthest away among all the houses.

Finally, we return the maximum radius.
*/

//two pointer
//O(n)
function findRadius2(houses, heaters) {
  houses.sort((a, b) => a - b); // Step 1
  heaters.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    radius = 0; // Step 2 and 3
  while (i < houses.length) {
    // Step 4
    while (
      j < heaters.length - 1 &&
      Math.abs(heaters[j + 1] - houses[i]) <= Math.abs(heaters[j] - houses[i])
    ) {
      j++;
    }
    radius = Math.max(radius, Math.abs(heaters[j] - houses[i])); // Step 4.c
    i++;
  }
  return radius; // Step 5
}

/**
1 Sort both arrays in ascending order

2 Initialize two pointers, i for houses and j for heaters to point at the beginning of the respective arrays.

3 Initialize a variable radius to 0, which will be used to store the minimum radius required to cover all houses

4 Loop through the houses array:
a. While the current house is to the right of the current heater, move the heater pointer to the next heater
b. If there is no next heater, break the loop since all houses can't be covered
c. Calculate the distance between the current house and the current heater, and update the radius variable if the distance is greater than radius
d. Move the house pointer to the next house

5 Return radius as the minimum radius required to cover all houses
 */
