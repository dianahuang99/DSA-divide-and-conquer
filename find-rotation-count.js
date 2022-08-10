function findRotationCount(arr) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;
  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[arr.length - 1]) {
      lower = mid + 1;
    } else {
      upper = mid - 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
