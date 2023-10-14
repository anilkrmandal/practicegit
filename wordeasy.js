
const WORDS = [
 
   
        'word', 'kite', 'fish', 'pump', 'lark', 'jump', 'star', 'note', 'this', 'wine',
        'bear', 'bell', 'tune', 'fold', 'mind', 'fast', 'card', 'blue', 'lamp', 'hope',
        'loud', 'rain', 'gold', 'burn', 'rock', 'shoe', 'make', 'page', 'play', 'spin',
        'quiz', 'corn', 'cake', 'king', 'frog', 'dark', 'flag', 'surf', 'sand', 'life',
        'tape', 'beam', 'pool', 'half', 'joke', 'park', 'mule', 'love', 'fold', 'help',
        'farm', 'chip', 'lawn', 'spin', 'silk', 'leaf', 'ring', 'what', 'dawn', 'dock',
        'left', 'tide', 'idea', 'fine', 'cage', 'lime', 'play', 'song', 'skip', 'heat',
        'zone', 'back', 'tile', 'path', 'fork', 'lady', 'seal', 'work', 'rope', 'zone',
        'band', 'play', 'palm', 'ruby', 'dark', 'ship', 'when', 'face', 'fire', 'nest',
        'flag', 'tide', 'moss', 'seal', 'game', 'ring', 'line', 'plan', 'dawn', 'hint'
      
  
];
const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let currentRow= 0 ;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)



document.addEventListener("keyup", (e) => {

if (guessesRemaining === 0) {
    return
}

let pressedKey = String(e.key)
if (pressedKey === "Backspace" && nextLetter !== 0) {
    deleteLetter()
    return
}

if (pressedKey === "Enter") {
    checkGuess()
    return
}

let found = pressedKey.match(/[a-z]/gi)
if (!found || found.length > 1) {
    return
} else {
    insertLetter(pressedKey)
}
})
