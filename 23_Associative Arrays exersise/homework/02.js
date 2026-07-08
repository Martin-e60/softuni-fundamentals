function solve(input) {
  let words = input.split(" ");
  let wordCount = {};
  let result = [];

  for (let word of words) {
    word = word.toLowerCase();

    if (!wordCount[word]) {
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }

  for (let word of words) {
    word = word.toLowerCase();
    if (wordCount[word] % 2 !== 0 && !result.includes(word)) {
      result.push(word);
    }
  }
  console.log(result.join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
