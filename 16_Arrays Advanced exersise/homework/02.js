function disinctArray(arr) {
  let uniqueNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if(!uniqueNumbers.includes(arr[i])){
      uniqueNumbers.push(arr[i]);
    }
  }
  console.log(uniqueNumbers.join(' '));
}

disinctArray([7,8,9,7,7,7,6,8,2]);