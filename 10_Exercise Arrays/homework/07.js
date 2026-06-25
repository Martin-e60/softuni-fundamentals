function maxSequence(arr) {
  let bestLength = 1;
  let currentLength = 1;

  let bestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++;

      if (currentLength > bestLength) {
        bestLength = currentLength;
        bestNumber = arr[i];
      }
    } else {
      currentLength = 1;
    }
  }

  let result = [];

  for (let i = 0; i < bestLength; i++) {
    result.push(bestNumber);
  }

  console.log(result.join(" "));
}

maxSequence([1, 1, 1, 1, 3, 3, 2, 2, 2, 1]);
