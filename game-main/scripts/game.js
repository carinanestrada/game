import { loadGameStats, saveGameStats, loadDifficulty } from './storage.js';

let clicks = 0;
let position1 = 0;
let position2 = 0;
let raceOver = false;
let chicken1Wins = 0;
let chicken2Wins = 0;
let totalRaces = 0;
let difficulty = 'easy';

const clickCountDisplay = document.getElementById("click-count");
const clickButton = document.getElementById("click-button");
const resetButton = document.getElementById("reset-button");
const chicken1 = document.getElementById("chicken1");
const chicken2 = document.getElementById("chicken2");
const progressBar = document.getElementById("progress-bar");
const chicken1WinsDisplay = document.getElementById("chicken1-wins");
const chicken2WinsDisplay = document.getElementById("chicken2-wins");
const totalRacesDisplay = document.getElementById("total-races");

function getRandomMove(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMovementRange() {
  if (difficulty === 'hard') {
    return { min: 5, max: 50 };
  }
  return { min: 10, max: 30 }; // easy
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

  const range = getMovementRange();
  const move1 = getRandomMove(range.min, range.max);
  const move2 = getRandomMove(range.min, range.max);

  position1 += move1;
  position2 += move2;

  updateChickenPositions();

  const raceWidth = document.querySelector('.race').offsetWidth;
  const finishLineX = raceWidth * 0.9;

  if (position1 >= finishLineX || position2 >= finishLineX) {
    endRace(position1, position2, finishLineX);
  }
}

function endRace(pos1, pos2, finishLine) {
  raceOver = true;
  clickButton.disabled = true;

  const winner = pos1 >= finishLine && pos1 >= pos2 ? "Chicken 1" : "Chicken 2";
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

  saveGameStats(chicken1Wins, chicken2Wins, totalRaces);
}

function resetRace() {
  clicks = 0;
  position1 = 0;
  position2 = 0;
  raceOver = false;

  clickCountDisplay.textContent = clicks;
  clickButton.textContent = "Press to move chickens!";
  clickButton.disabled = false;
  progressBar.style.width = "0%";

  updateChickenPositions();
}

export function setDifficulty(level) {
  if (level === 'easy' || level === 'hard') {
    difficulty = level;
  }
}

export function getDifficulty() {
  return difficulty;
}

export function initializeGame() {
  const stats = loadGameStats();
  chicken1Wins = stats.c1Wins;
  chicken2Wins = stats.c2Wins;
  totalRaces = stats.totalRaces;
  difficulty = loadDifficulty();

  chicken1WinsDisplay.textContent = chicken1Wins;
  chicken2WinsDisplay.textContent = chicken2Wins;
  totalRacesDisplay.textContent = totalRaces;

  if (clickButton && clickCountDisplay && chicken1 && chicken2) {
    clickButton.addEventListener("click", addClick);
    resetButton.addEventListener("click", resetRace);
  } else {
    console.warn("Unable to initialize chicken race: missing HTML elements.");
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGame);
} else {
  initializeGame();
}
