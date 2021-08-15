//9. write a function which will find the greatest number in a given array
let arr = [1, 4, 5, 7, 8, 11];
function greatest(arr) {
  let i;
  // assuming largest element to be 1st element
  let max = arr[0];
  // compare 1st assumed element to all the element
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max)
      // if it is greatest make it max
      max = arr[i];
  }
  return max;
}
