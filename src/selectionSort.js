function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])


  for(let i = 0; i < arr.length - 1; i++){
    let smallestIndex = i;
    for(let j = i+1; j< arr.length; j++){
      if(arr[j] < arr[smallestIndex]){
        smallestIndex = j
      }
    }
    [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]
  }
  return arr;
}

