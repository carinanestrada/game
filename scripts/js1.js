let clicks = 0;

// Get references to the HTML elements
const clickCountDisplay = document.getElementById("click-count");
const clickButton = document.getElementById("click-button");

// Function to handle a click event
function addClick() {
    clicks++; // Increment the clicks variable
    clickCountDisplay.textContent = clicks; // Update the display in the HTML
}

// Add an event listener to the button
clickButton.addEventListener("click", addClick);