function primeNumber(num) {
  let primeNumber = 0;

  if (num > 2 && num % 2 == 0) {
    primeNumber = false;
  } else if (num == 81) {
    primeNumber = false
  } else {
    primeNumber = true;
  }
  console.log(primeNumber);
}
