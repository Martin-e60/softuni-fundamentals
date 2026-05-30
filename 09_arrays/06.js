function solve(arr) {
  let evenNumberSum = 0;
  let oddNumberSum = 0;

  for (let evenNumbers of arr) {
    evenNumbers = Number(evenNumbers);

    if (evenNumbers % 2 == 0) {
      evenNumberSum += evenNumbers;
    }
  }
  for (let oddNumbers of arr) {
    oddNumbers = Number(oddNumbers);

    if (oddNumbers % 2 != 0) {
      oddNumberSum += oddNumbers;
    }
  }
  console.log(evenNumberSum - oddNumberSum);
}
