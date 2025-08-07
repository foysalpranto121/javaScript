// next question solve 

// function processAndConcat(arg1, arg2) {
//     let trimmed1 = arg1.trim().toUpperCase();
//     let trimmed2 = arg2.trim().toUpperCase();
//     return trimmed1 + " " + trimmed2;
// }

// // Sample Test
// console.log(processAndConcat("  hello ", " world  ")); // Output: "HELLO WORLD"
// // 

function add(num1, num2) {
  let rakib = num1.trim().toLowerCase();  // Corrected toUpperCase()
  let sakib = num2.trim().toUpperCase();  // Corrected toUpperCase()
  return rakib + " " + sakib;
}

console.log(add(" hello ", " bangladesh"));  // Output: "HELLO BANGLADESH"

//HELLO BANGLADESH