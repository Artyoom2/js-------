function findSmallestIndex(arr) {
  // [1, 45, 85, 34]
  let smallest = arr[0]; // 1
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      // 34 < 1
      smallest = arr[i]; // 34
      smallestIndex = i; // 2
    }
  }

  return smallestIndex;
}

function selectionSort(array) {
  let size = array.length;
  let newArr = [];
  for (let i = 0; i < size; i++) {
    let smallestIndex = findSmallestIndex(array); //1) smallestIndex = 0; 2) smallestIndex = 2; 3) smallestIndex = 0
    newArr.push(array[smallestIndex]); //1) newArr = [1] 2) newArr = [1, 34] 3) newArr = [1, 34, 45]
    array.splice(smallestIndex, 1); //  1) array = [45, 85, 34] 2) array = [45, 85] 3)array = [85]
  }

  return newArr;
}
console.log(selectionSort([1, 45, 85, 34]));
