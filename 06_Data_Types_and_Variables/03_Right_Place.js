function rightPlace(string1, char, string2) {
  let replacedString1 = string1.replace('_',char); 

  if (replacedString1 === string2) {
    console.log('Matched');
  } else if (replacedString1 !== string2) {
    console.log('Not Matched');
  }
}