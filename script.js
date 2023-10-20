const allWords = ["WORD", "SPEAR", "HIPPOPOTIMUS", "MILK", "CRAYON"]

const randomWord = allWords[Math.floor(Math.random() * allWords.length)]

let splitWord = randomWord.split("")

const restart = document.getElementById("restart")
const hint = document.getElementById("hint")
const title = document.getElementById("title")
const hangman = document.getElementById("hangman")
const buttons = document.getElementsByTagName("button")
const gameWord = document.getElementById("game-word")

const gameLetters = []
const blanks = []
let lives = 5

function disableButtons() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("disabled", "")
    }
}

for (let i = 0; i < splitWord.length; i++) {
    gameLetters.push(splitWord[i])
    splitWord[i] = "_"
    blanks.push(splitWord[i])
    gameWord.textContent = blanks.join(" ")
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        let guessedLetter = event.target.textContent
        buttons[i].setAttribute("disabled", "")
        if (gameLetters.includes(guessedLetter) === true) {
            for (let i = 0; i < gameLetters.length; i++) {
                if (gameLetters[i] === guessedLetter) {
                    blanks[i] = guessedLetter
                    gameWord.textContent = blanks.join(" ")
                }
            }
        }else if (gameLetters.includes(guessedLetter) === false) {
            lives -= 1
        }
        if (lives === 4) {
            hangman.src = "https://www.pngarts.com/files/3/Smile-Emoji-Face-PNG-Download-Image.png"
        }
        if (lives === 3) {
            hangman.src = "http://imagensemoldes.com.br/wp-content/uploads/2018/06/Emoji-Normal-PNG.png"
        }
        if (lives === 2) {
            hangman.src = "https://cdn4.iconfinder.com/data/icons/emoji-46/48/27-feel_bad-512.png"
        }
        if (lives === 1) {
            hangman.src = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48960/loudly-crying-face-emoji-clipart-md.png"
            if (randomWord === "WORD") {
                hint.textContent = "HINT: WE USE THIS TO MAKE A SENTANCE"
            }
            if (randomWord === "SPEAR") {
                hint.textContent = "HINT: A VERY PRIMITIVE WEAPON"
            }
            if (randomWord === "HIPPOPOTIMUS") {
                hint.textContent = "HINT: A VERY LARGE ANIMAL"
            }
            if (randomWord === "MILK") {
                hint.textContent = "HINT: THINK COWS"
            }
            if (randomWord === "CRAYON") {
                hint.textContent = "HINT: CHILDREN USE THIS TO EXPRESS CREATIVITY"
            }
        }
        if (lives === 0) {
            hangman.src = "https://images.vexels.com/media/users/3/134499/isolated/lists/15919ef0465bf8c31fbc307d9b20f1a9-emoji-morto-emoticon.png"
            title.textContent = "YOU LOSE"
            hint.textContent = " "
            restart.innerHTML = (" <a href=game.html <h1> TRY AGAIN </h1> </a>")
            gameWord.textContent = (`THE WORD WAS ${randomWord}`)
            disableButtons()
        }
        if (blanks.length === gameLetters.length && blanks.every(function (element, index) {
            return element === gameLetters[index]
        })) {
            hangman.src = "http://cdn.shopify.com/s/files/1/1061/1924/products/4_grande.png?v=1544200553"
            title.textContent = "YOU WIN"
            hint.textContent = " "
            restart.innerHTML = (" <a href=game.html <h1> PLAY AGAIN </h1> </a>")
            gameWord.textContent = (`THE WORD WAS ${randomWord}`)
            disableButtons()
        }
    })
}

