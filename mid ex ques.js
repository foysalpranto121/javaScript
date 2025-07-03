function testVariables() {
    var x = 10;
    let y = 20;
    const z = 30;

    if (true) {
        var x = 40;      // Reassigns the function-scoped x (10 → 40)
        let y = 50;      // New y, only inside this block
        // const z = 60; // Would be allowed as a new block-level variable

        console.log(x); // 🔹 Logs: 40 (function-scoped)
        console.log(y); // 🔹 Logs: 50 (block-scoped)
        console.log(z); // 🔹 Logs: 30 (outer block const accessible inside)
    }

    console.log(x); // 🔹 Logs: 40 (was overwritten in if block)
    console.log(y); // 🔹 Logs: 20 (unchanged outside if block)
    console.log(z); // 🔹 Logs: 30 (same constant value)
} 
testVariables();