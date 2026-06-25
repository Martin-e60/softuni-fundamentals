function rotation(arr, rotationCount) {
  for (
    let currentRotation = 1;
    currentRotation <= rotationCount;
    currentRotation++
  ) {
    let firstEl = arr.shift();
    arr.push(firstEl);
  }
  console.log(arr.join(" "));
}
