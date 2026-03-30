let clicks = 0;
let position1 = 0;
let position2 = 0;
let raceOver = false;

const clickCountDisplay = document.getElementById("click-count");
const clickButton = document.getElementById("click-button");
const chicken1 = document.getElementById("chicken1");
const chicken2 = document.getElementById("chicken2");

function getSelectionRange() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
        return null;
    }
    return selection.getRangeAt(0);
}

function isSelection() {
    return getSelectionRange() !== null;
}

function getRandomMove(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateChickenPositions() {
    chicken1.style.transform = `translateX(${position1}px)`;
    chicken2.style.transform = `translateX(${position2}px)`;
}

function addClick() {
    if (raceOver) {
        return;
    }

    clicks += 1;
    clickCountDisplay.textContent = clicks;

    const move1 = getRandomMove(10, 30);
    const move2 = getRandomMove(5, 25);

    position1 += move1;
    position2 += move2;

    updateChickenPositions();

    const finishLineX = 520;
    if (position1 >= finishLineX || position2 >= finishLineX) {
        raceOver = true;
        clickButton.disabled = true;
        const winner = position1 >= finishLineX && position1 >= position2 ? "Chicken 1" : "Chicken 2";
        clickButton.textContent = `${winner} wins!`;
    }
}

if (clickButton && clickCountDisplay && chicken1 && chicken2) {
    clickButton.addEventListener("click", addClick);
} else {
    console.warn("Unable to initialize chicken race: missing HTML elements.");
}