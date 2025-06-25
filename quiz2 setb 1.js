function evaluateScore(score) {
    if (score >= 90) {
        console.log("Excellent");
    } else if (score >= 70) {
        console.log("Good job");
    } else if (score >= 50) {
        console.log("Needs improvement");
    } else {
        console.log("Failed");
    }
}

// Example usage:
evaluateScore(92); // Output: Excellent
evaluateScore(76); // Output: Good job
evaluateScore(60); // Output: Needs improvement
evaluateScore(35); // Output: Failed
