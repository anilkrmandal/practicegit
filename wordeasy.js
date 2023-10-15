
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

function insertLetter (pressedKey) {
if (nextLetter === 4) {
    return
}
pressedKey = pressedKey.toLowerCase()
console.log(guessesRemaining)
let row = document.getElementsByClassName("lrow")[6 - guessesRemaining]
let box = row.children[nextLetter]
box.textContent = pressedKey
box.classList.add("filled-box")
currentGuess.push(pressedKey)
nextLetter += 1
}

function deleteLetter () {
let row = document.getElementsByClassName("lrow")[6 - guessesRemaining]
let box = row.children[nextLetter - 1]
box.textContent = ""
box.classList.remove("filled-box")
currentGuess.pop()
nextLetter -= 1
}

function checkGuess() {
let guessString = currentGuess.join("").toLowerCase();
console.log(guessString)

if (guessString.length !== 4) {
    alert("Not enough letters!");
    return ;
    
}

if (!WORDS.includes(guessString)) {
   // alert("Word not in the list!");
    

}

if (guessString === rightGuessString) {
    alert("You guessed right! Game over!");
    shadeKeyboard() ;
   
    return ;
} else {
    guessesRemaining -= 1;
}

shadeKeyboard();
nextRow();

if (guessesRemaining === 0) {
    alert("You've run out of guesses! Game over!");
    alert(`The right word was: "${rightGuessString}"`);
}
}

function shadeKeyboard() {
let guessedPositions = [];

// First, find the correct positions (green)
for (let i = 0; i <4; i++) {
    if (currentGuess[i] === rightGuessString[i]) {
        guessedPositions.push(i);
        console.log(i);
    }
}
console.log(currentGuess)

for (let i = 0; i < 4; i++) {
    let letter = currentGuess[i];
    let letterColor = "black";

    // If the letter is in the correct positions, color it green
    if (guessedPositions.includes(i)) {
        letterColor = "green";
    } else {
        // If the letter is correct but in the wrong position, color it yellow
        for (let j = 0; j < rightGuessString.length; j++) {
            if (letter === rightGuessString[j] && !guessedPositions.includes(j)) {
                letterColor = "yellow";
                break;
            }
        }
    }
    const map1 = new Map();
for (let k = 0 ; k<4 ; k++) {
map1.set(rightGuessString[k],1) ;
}
let g = 0 ; 
    for (const elem of document.getElementsByClassName(`letterbox${currentRow}`)) {
        
           if (currentGuess[g]==rightGuessString[g]) {
            
                elem.style.backgroundColor = "green";
           }
           else if (map1.get(currentGuess[g])==1) {
            elem.style.backgroundColor = "yellow";
           } 
           else {
            elem.style.backgroundColor = "black";
           }
           g++ ;
            
        }
    
    for (const ele of document.querySelectorAll(".keyboard-button")) {
        console.log(letter)
        if ((ele.innerHTML) == letter) {
            console.log(ele.innerHTML)
            let oldColor = ele.style.backgroundColor;
            if (oldColor !== "green") {
                ele.style.backgroundColor = letterColor;
            }
        }
    }

}
}

function nextRow() {
currentRow++;

if (currentRow < NUMBER_OF_GUESSES) {
    currentGuess = [];
    nextLetter = 0;

}
}
function handleKey(key) {
if (guessesRemaining === 0) {
    return
}


    insertLetter(key);

}

function handleDelete() {
deleteLetter()
}

function handleEnter() {

checkGuess()
}
function resetGame() {
        
    console.log("df") ;
    console.log("f")
    guessesRemaining = 6;
    currentGuess = [];
    nextLetter = 0;
    currentRow = 0;
    rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
    

    // Clear the displayed letters and their colors
    for (const row of document.getElementsByClassName("lrow")) {
        for (const box of row.children) {
            box.textContent = "";
            box.classList.remove("filled-box");
            box.style.backgroundColor = "transparent";
        }
    }

    // Reset the keyboard button colors
    for (const ele of document.querySelectorAll(".keyboard-button")) {
        ele.style.backgroundColor = "transparent";
    }
    console.log(rightGuessString)
}
