const STORAGE_KEYS = {
  PLAYER_NAME: 'chickenRace_playerName',
  CHICKEN1_WINS: 'chickenRace_chicken1Wins',
  CHICKEN2_WINS: 'chickenRace_chicken2Wins',
  TOTAL_RACES: 'chickenRace_totalRaces',
  DIFFICULTY: 'chickenRace_difficulty'
};

export function savePlayerName(name) {
  if (name && name.trim().length >= 2) {
    localStorage.setItem(STORAGE_KEYS.PLAYER_NAME, name.trim());
    return true;
  }
  return false;
}

export function loadPlayerName() {
  return localStorage.getItem(STORAGE_KEYS.PLAYER_NAME) || 'Player';
}

export function saveDifficulty(difficulty) {
  if (difficulty === 'easy' || difficulty === 'hard') {
    localStorage.setItem(STORAGE_KEYS.DIFFICULTY, difficulty);
    return true;
  }
  return false;
}

export function loadDifficulty() {
  return localStorage.getItem(STORAGE_KEYS.DIFFICULTY) || 'easy';
}

export function saveGameStats(c1Wins, c2Wins, totalRaces) {
  localStorage.setItem(STORAGE_KEYS.CHICKEN1_WINS, c1Wins.toString());
  localStorage.setItem(STORAGE_KEYS.CHICKEN2_WINS, c2Wins.toString());
  localStorage.setItem(STORAGE_KEYS.TOTAL_RACES, totalRaces.toString());
}

export function loadGameStats() {
  return {
    c1Wins: parseInt(localStorage.getItem(STORAGE_KEYS.CHICKEN1_WINS)) || 0,
    c2Wins: parseInt(localStorage.getItem(STORAGE_KEYS.CHICKEN2_WINS)) || 0,
    totalRaces: parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_RACES)) || 0
  };
}

export function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}
