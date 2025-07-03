//slice() and charAt(), split

let text = "Hello world!";
let result = text.slice(0, 5).toUpperCase()
;
console.log(result);
let convert =text.charAt(1).toUpperCase();
console.log(convert);


let num = [1, 2, 3, 4];
let myArray = num.slice(0, 3); 
console.log(myArray); 
let str = "1,2,3,4";
let myArray1 = str.split(",", 3);  // second argument is limit
console.log(myArray1); 

// function and loop
// Function to check even and odd numbers from 1 to 10
function checkEvenOdd() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i + " is Even");
        } else {
            console.log(i + " is Odd");
        }
    }
}

// Call the function
checkEvenOdd();




