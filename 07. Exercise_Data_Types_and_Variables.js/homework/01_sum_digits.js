function solve(num) {
  let sum = 0;
  let numString = String(num);

  for (let char of numString) {
    let digit = Number(char);
    sum += digit 
  }
  console.log(sum);
}