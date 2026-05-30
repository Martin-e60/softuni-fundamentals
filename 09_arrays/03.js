function reverse(num, arr) {
  let newArr = [];

  for (let i = 0; i < num; i++) {
    let oldArrValue = arr[i];

    newArr[i] = oldArrValue; 
  }
  let reversedArr = newArr.reverse(); 

  console.log(reversedArr.join(' '));
}