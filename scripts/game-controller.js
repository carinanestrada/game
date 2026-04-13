import { setDifficulty } from './game.js';
import { loadDifficulty, loadPlayerName, savePlayerName, saveDifficulty, clearAllData } from './storage.js';

function initializeController() {
  const difficulty = loadDifficulty();
  setDifficulty(difficulty);
  loadSettingsIntoForm();

  console.log("Hey here is a super fancy hint: type goldenChicken() in console");

  window.goldenChicken = function () {
    document.body.classList.toggle("gold-theme");
  };
}

function loadSettingsIntoForm() {
  const playerName = loadPlayerName();
  const difficulty = loadDifficulty();

  if (playerName) {
    document.getElementById('player-name').value = playerName;
  }
  if (difficulty) {
    document.getElementById('difficulty').value = difficulty;
  }
}

function setupFormHandlers() {
  const form = document.getElementById('settingsForm');
  const clearAllBtn = document.getElementById('clear-all-btn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      const playerName = document.getElementById('player-name').value;
      const difficulty = document.getElementById('difficulty').value;

      savePlayerName(playerName);
      saveDifficulty(difficulty);
      setDifficulty(difficulty);

      alert('Settings saved!');
      form.classList.remove('was-validated');
      form.reset();
      loadSettingsIntoForm();
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', function () {
      if (confirm('Are you sure you want to clear all data?')) {
        clearAllData();
        if (form) form.reset();
        alert('All data cleared!');
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initializeController();
    setupFormHandlers();
  });
} else {
  initializeController();
  setupFormHandlers();
}