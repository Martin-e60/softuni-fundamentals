function solve(arr1, arr2) {
  let areEqual = true;
  let arrSum = 0;

  for (let i = 0; i < arr1.length; i++) arr1[i] = Number(arr1[i]);
  for (let i = 0; i < arr2.length; i++) arr2[i] = Number(arr2[i]);

  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }

  if (areEqual == true) {
    for (let sum of arr1) {
      arrSum += sum;
    }
    console.log(`Arrays are identical. Sum: ${arrSum}`);
  }
}

solve(["10", "20", "30"], ["10", "20", "30"]);
