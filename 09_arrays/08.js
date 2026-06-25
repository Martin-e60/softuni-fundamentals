function condenseArray(num) {
  while (num.length > 1) {
    let condensed = [];
    for (let i = 0; i < num.length - 1; i++) {
      condensed[i] = num[i] + num[i + 1];
    }
    num = condensed;
  }
  return num[0];
}
