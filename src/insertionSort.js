function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for(let i=1; i < arr.length; i++){
    let j = i;
    while(j> 0 && arr[j-1] > arr[j]){
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      j--
    }

  }
}


// function bubblesort(arr) {
//   // your code here!
//   // arr is an array of unsorted integers (i.e. [3, 5, 1])
//   let change;
//   let x = arr.length
//   do{
//     change = 0;
//     for(let i = 1; i< x; i++){
//       if(arr[i-1] > arr[i]){
//         [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
//         change++;  
//       } 
//     }
//     x--
//     }while (change !== 0 )
//     return arr
// }