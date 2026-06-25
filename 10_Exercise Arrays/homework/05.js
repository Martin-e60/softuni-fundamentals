function maxNumber(arr) {
  let topNums = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      let secNum = arr[j];

      if (secNum >= num) {
        isTop = false;
        break;
      }
    }

    if (isTop == true) {
      topNums.push(num);
    }
  }

  console.log(topNums.join(" "));
}

maxNumber([1, 4, 3, 2]);