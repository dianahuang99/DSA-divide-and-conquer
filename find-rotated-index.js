function findRotatedIndex(arr, num) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;
  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] < num) {
      if (arr[upper] < num && arr[lower] > num) {
        upper = mid - 1;
      } else {
        lower = mid + 1;
      }
    }
    if (arr[mid] > num) {
      if (arr[lower] <= num) {
        upper = mid - 1;
      } else {
        lower = mid + 1;
      }
    }
  }

  return -1;
}

module.exports = findRotatedIndex;
