let clicks = 0;
let position1 = 0;
let position2 = 0;
let raceOver = false;
let chicken1Wins = 0;
let chicken2Wins = 0;
let totalRaces = 0;

const clickCountDisplay = document.getElementById("click-count");
const clickButton = document.getElementById("click-button");
const resetButton = document.getElementById("reset-button");
const chicken1 = document.getElementById("chicken1");
const chicken2 = document.getElementById("chicken2");
const progressBar = document.getElementById("progress-bar");
const chicken1WinsDisplay = document.getElementById("chicken1-wins");
const chicken2WinsDisplay = document.getElementById("chicken2-wins");
const totalRacesDisplay = document.getElementById("total-races");

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
    updateProgressBar();
}

function updateProgressBar() {
    const raceWidth = document.querySelector('.race').offsetWidth;
    const finishLineX = raceWidth * 0.9;
    const furthestPosition = Math.max(position1, position2);
    const progressPercent = Math.min((furthestPosition / finishLineX) * 100, 100);
    progressBar.style.width = `${progressPercent}%`;
}

function addClick() {
    if (raceOver) {
        return;
    }

    clicks += 1;
    clickCountDisplay.textContent = clicks;

    const move1 = getRandomMove(10, 30);
    const move2 = getRandomMove(10, 30);

    position1 += move1;
    position2 += move2;

    updateChickenPositions();

    const raceWidth = document.querySelector('.race').offsetWidth;
    const finishLineX = raceWidth * 0.9;
    if (position1 >= finishLineX || position2 >= finishLineX) {
        raceOver = true;
        clickButton.disabled = true;
        const winner = position1 >= finishLineX && position1 >= position2 ? "Chicken 1" : "Chicken 2";
        clickButton.textContent = `${winner} wins!`;

        totalRaces += 1;
        if (winner === "Chicken 1") {
            chicken1Wins += 1;
            chicken1WinsDisplay.textContent = chicken1Wins;
        } else {
            chicken2Wins += 1;
            chicken2WinsDisplay.textContent = chicken2Wins;
        }
        totalRacesDisplay.textContent = totalRaces;
    }
}

function resetRace() {
    clicks = 0;
    position1 = 0;
    position2 = 0;
    raceOver = false;

    clickCountDisplay.textContent = clicks;
    clickButton.textContent = "Press me!";
    clickButton.disabled = false;
    progressBar.style.width = "0%";

    updateChickenPositions();
}

if (clickButton && clickCountDisplay && chicken1 && chicken2) {
    clickButton.addEventListener("click", addClick);
    resetButton.addEventListener("click", resetRace);
} else {
    console.warn("Unable to initialize chicken race: missing HTML elements.");
}