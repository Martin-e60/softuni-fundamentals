function solve(sentence, word) {
  let replacementLength = word.length
  let replacement = '*'.repeat(replacementLength);
  let result = sentence.replaceAll(word, replacement); 

  console.log(result)
}