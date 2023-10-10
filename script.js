allWords = ["words", "spear"]

randomWord = allWords[Math.floor(Math.random() * allWords.length)]

splitWord = randomWord.split("")

function startGame() {
    gameLetters = []
    arr = []
    for (i = 0; i < splitWord.length; i++) {
        gameLetters.push(splitWord[i])
        splitWord[i] = "_"
        arr.push(splitWord[i])
        document.getElementById("game-word").textContent = arr

        // document.getElementById("game-word").addEventListener("click", function() {
        //     guessedLetter = prompt("Guess a letter")
        // })
        // if(guessedLetter.includes(gameLetters[i])) {
        //     // make guessed letter appear in correct place
        // }
    }
}



