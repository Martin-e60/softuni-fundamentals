function reverseString(str) {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reversedStr += char; 
  }
  console.log(reversedStr);
}