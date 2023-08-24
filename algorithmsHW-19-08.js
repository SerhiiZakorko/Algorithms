const arr1 = [100, 112, 256, 349, 770]
const arr2 = [72, 86, 113, 119, 265, 445, 892]

const arr3 = [...arr1, ...arr2]
const result = arr3.sort((a, b) => a - b)[6]
console.log(result)


function merge(arr1, arr2, k) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        arr.push(arr1[i++]);
      } else {
        arr.push(arr2[j++]);
      }
    }
    while (i < arr1.length) {
      arr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      arr.push(arr2[j++]);
    }
    return arr[k-1];
  }
  console.log(merge([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7 ))