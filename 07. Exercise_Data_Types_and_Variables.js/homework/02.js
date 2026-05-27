function asciiCodes(char1, char2, char3) {
  reversedChars = (`${char3}${char2}${char1}`);

  let ascii1 = char1.charCodeAt();
  let ascii2 = char2.charCodeAt();
  let ascii3 = char3.charCodeAt();

  console.log(reversedChars);
  console.log(`${ascii3} ${ascii2} ${ascii1}`);
}