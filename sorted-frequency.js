function sortedFrequency(arr, val) {
  let first = findFirst(arr, val);
  let last = findLast(arr, val);
  if (first === -1) {
    return -1;
  } else {
    return last - first + 1;
  }
}

function findFirst(arr, val) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;
  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    if (
      (arr[mid] === val && mid === 0) ||
      (arr[mid] === val && arr[mid - 1] !== val)
    ) {
      return mid;
    } else if (val <= arr[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
}

function findLast(arr, val) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;
  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    if (
      (arr[mid] === val && mid === arr.length - 1) ||
      (arr[mid] === val && arr[mid + 1] !== val)
    ) {
      return mid;
    } else if (val >= arr[mid]) {
      lower = mid + 1;
    } else {
      upper = mid - 1;
    }
  }
}

module.exports = sortedFrequency;
