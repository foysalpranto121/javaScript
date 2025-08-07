function countVowels(text) {
  text = text.toLowerCase();
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if ("aeiou".indexOf(text[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));

