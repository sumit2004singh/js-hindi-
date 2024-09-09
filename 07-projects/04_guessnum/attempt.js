let randomnum = (parseInt(Math.random()*100 +1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHI = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('div')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click' , (e) =>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}


function validateGuess (guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess < 1){
        alert('Please enter a valid number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomnum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomnum) {
        displayMessage(`You guessed it right , You Won !!`)
        endGame()
    }else if (guess < randomnum){
        displayMessage(`Number is Toooo low`)
    }else if (guess > randomnum){
        displayMessage(`Number is Toooo high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}      `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHI.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h5 id = "newGame">New Game</h5>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame (){
    const newgameBtn = document.querySelector("#newGame")
    newgameBtn.addEventListener('click' , (e)=> {
        randomnum =  (parseInt(Math.random()*100 +1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML  = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
