function solve(arr) {
  arr = arr.map(Number);

  let first = arr.shift();
  let last = arr.pop();
  let sum = first + last;

  console.log(sum)
}

solve(['20', '30', '40']);