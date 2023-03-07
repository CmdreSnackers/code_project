/*
Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

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
      radius = distance; // ppdate
    }
  }
  return radius;
}

//two pointer
//O(n)
function findRadius2(houses, heaters) {
  houses.sort(function (a, b) {
    return a - b;
  });
  heaters.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = 0;
  let maxRadius = 0;
  while (i < houses.length) {
    while (
      j < heaters.length - 1 &&
      Math.abs(heaters[j] - houses[i]) >= Math.abs(heaters[j + 1] - houses[i])
    ) {
      j++;
    }
    maxRadius = Math.max(maxRadius, Math.abs(heaters[j] - houses[i]));
    i++;
  }
  return maxRadius;
}
