function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const leftPart = [];
  const rightPart = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? leftPart.push(arr[i]) : rightPart.push(arr[i]);
  }
  return [...quickSort(leftPart), pivot, ...quickSort(rightPart)];
}

const array = [8, 6, 18, 64, 5, 15, 4];
console.log(quickSort(array));
