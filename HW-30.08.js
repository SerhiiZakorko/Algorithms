function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.slice(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2));
  
    return merge(mergeSort(left), mergeSort(right)); 
  }
  
  const array1 = [5, 45, 16, 65, 18, 6, 54, 4, 654, 54];
  const sortedArray1 = mergeSort(array1);
  console.log(sortedArray1);