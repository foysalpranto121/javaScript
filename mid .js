// next question solve 

function processAndConcat(arg1, arg2) {
    let trimmed1 = arg1.trim().toUpperCase();
    let trimmed2 = arg2.trim().toUpperCase();
    return trimmed1 + " " + trimmed2;
}

// Sample Test
console.log(processAndConcat("  hello ", " world  ")); // Output: "HELLO WORLD"
