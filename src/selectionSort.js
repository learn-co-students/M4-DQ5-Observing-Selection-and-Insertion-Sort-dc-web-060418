function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  // First loop
  for (i = 0; i<arr.length; i++) {
    let minVal = arr[i+1];

    for (j = i+1; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minVal = arr[j]
      }
    }
    if (minVal < arr[i]) {
      let x = arr.indexOf(minVal)
      arr[x] = arr[i]
      arr[i] = minVal
    }
  }
  return arr
}
