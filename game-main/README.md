# The amazing chicken race game
  Hope you enjoy!

## Description
A fun game where two chickens race to cross the road first. Click the button to move the chickens randomly. The first chicken to reach the finish line wins!!! There is a hard mode that varies the distance possible by a good amount, creating more variations!! 

## Game rules
1. Start by clicking the 'Press to move chickens!' button.
2. First chicken to reach the finish line wins.
3. Your session is automatically saved, press restart to begin fresh or clear the cache in settings!


### So here is a code snippet
 = Random movement with varying difficulty.

```javascript
// this changes the difficulty to be a decent amount more of a random distance
function getMovementRange() {
    if (difficulty === 'hard') {
        return { min: 5, max: 50 }; 
    }
    return { min: 10, max: 30 };  // this one is just the else logic
}

function getRandomMove(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // now the actual math logic that generates the distance, this is important because random adds a lot of variation to the races!!

}
```
### Future enhancements

- Maybe adding sound effects? Or perhaps a dark theme.

The wireframe is attached below:
