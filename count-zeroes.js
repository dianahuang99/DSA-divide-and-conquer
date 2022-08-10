function countZeroes(arr) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;
  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    if (upper === lower) {
      if (arr[upper] === 1) {
        return 0;
      } else {
        return arr.length;
      }
    }
    if (arr[mid] === 0) {
      if (arr[mid - 1] === 1) {
        return arr.length - mid;
      }
      upper = mid - 1;
    } else {
      if (arr[mid + 1] === 0) {
        return arr.length - mid - 1;
      }
      lower = mid + 1;
    }
  }
}

module.exports = countZeroes;
