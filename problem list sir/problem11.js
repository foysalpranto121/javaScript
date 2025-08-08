function findMaxNumber(numbers) {
  return Math.max(...numbers);
}

let result = findMaxNumber([12, 5, 27, 8, 19]);
console.log(result);
//note to be rembered
//The ... (spread operator) takes the array numbers and spreads it into individual arguments
//Math.max()==> find large num and Math.min() for small number ===> is a built-in JavaScript function that returns ...