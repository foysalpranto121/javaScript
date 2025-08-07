function isPalindrome(word) {
  let lowerWord = word.toLowerCase();
  let reversed = lowerWord.split("").reverse().join("");
  return lowerWord === reversed;
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Hello"));   
