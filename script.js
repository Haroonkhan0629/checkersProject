allWords = ["words", "spear"]

randomWord = allWords[Math.floor(Math.random() * allWords.length)]

splitWord = randomWord.split("")

gameWord = document.getElementById("game-word")
gameLetters = []
blanks = []

for (i = 0; i < splitWord.length; i++) {
    gameLetters.push(splitWord[i])
    splitWord[i] = "_"
    blanks.push(splitWord[i])
    gameWord.textContent = blanks
}

gameWord.addEventListener("click", function () {
    guessedLetter = prompt("Guess a letter")
    if (gameLetters.includes(guessedLetter) === true) {
        for (i = 0; i < gameLetters.length; i++) {
            if (gameLetters[i] === guessedLetter) {
                blanks[i] = guessedLetter
                gameWord.textContent = blanks
            }
        }
    } else if (gameLetters.includes(guessedLetter) === false) {
        alert("wrong")
    }
})




