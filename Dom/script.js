// Select the h1 element and the button
const welcomeMessage = document.getElementById("welcome-message");
const changeTextBtn = document.getElementById("change-text-btn");

// Add a click event listener to the button
changeTextBtn.addEventListener("click", function() {
    welcomeMessage.innerText = "Welcome, JavaScript Coder!";
});
// Dark Mode Toggle
document.getElementById("toggle-mode-btn").onclick = () => {
    document.body.classList.toggle("dark-mode");
};

// Add Item to To-Do List
document.getElementById("add-item-btn").onclick = () => {
    let text = document.getElementById("new-item-input").value.trim();
    if (text) {
        let li = document.createElement("li");
        li.textContent = text;
        document.getElementById("todo-list").appendChild(li);
        document.getElementById("new-item-input").value = "";
    }
};
// Character Count Feature
document.getElementById("new-item-input").addEventListener("keyup", function () {
    document.getElementById("char-count").innerText = this.value.length;
});