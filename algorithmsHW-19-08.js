const arr1 = [100, 112, 256, 349, 770]
const arr2 = [72, 86, 113, 119, 265, 445, 892]

const arr3 = [...arr1, ...arr2]
const result = arr3.sort((a, b) => a - b)[6]
console.log(result)
