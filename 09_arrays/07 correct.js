function solve(arr1, arr2) {
  let areEqual = true;

  // Convert both arrays first
  for (let i = 0; i < arr1.length; i++) arr1[i] = Number(arr1[i]);
  for (let i = 0; i < arr2.length; i++) arr2[i] = Number(arr2[i]);

  // Then compare
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }

  // Sum check AFTER the loop
  if (areEqual) {
    let arrSum = 0;
    for (let num of arr1) arrSum += num;
    console.log(`Arrays are identical. Sum: ${arrSum}`);
  }
}

solve(["10", "20", "30"], ["10", "20", "30"]);