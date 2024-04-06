function binarySearchPosition(numbers, target) {
  // your code here
  let begin = 0;
  let end = numbers.length - 1;

  while (begin <= end) {
    let mid = Math.round((begin + end) / 2);
    if (numbers[mid] > target) {
      end = mid - 1;
    } else if (numbers[mid] < target) {
      begin = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
