// Variables declaration

const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
let current0 = document.querySelector("#current--0");
let current1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const newMatchBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//Setting values to 0 to start the game

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let score0 = 0;
let score1 = 0;
let playing = true;


// Roll the dice

rollBtn.addEventListener("click", () => {
    if(playing){
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");

    //function to reduce code on each case

    function diceToScore() {
        currentScore += diceNumber;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }

    // Conditionals for each number

    if(diceNumber == 1) {
        dice.src = './images/dice-1.png';
        currentScore = 0;
        current0.textContent = currentScore;
        current1.textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle("player--active");
        player1.classList.toggle("player--active");
    } else if(diceNumber == 2){
        dice.src = './images/dice-2.png';
        diceToScore();
    }else if(diceNumber == 3){
        dice.src = './images/dice-3.png';    
        diceToScore();
    }else if(diceNumber == 4){
        dice.src = './images/dice-4.png';
        diceToScore();
    }else if(diceNumber == 5){
        dice.src = './images/dice-5.png';
        diceToScore();
    }else if(diceNumber == 6){
        dice.src = './images/dice-6.png';
        diceToScore();
    }
}})

// Event listener for the hold button

holdBtn.addEventListener("click", () => {
    // Acumulating the current score on the user's score and making each turn
    activePlayer == 0 ? score0 += currentScore : score1 += currentScore;
    scorePlayer0.textContent = score0;
    scorePlayer1.textContent = score1;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    currentScore = 0;
    current0.textContent = currentScore;
    current1.textContent = currentScore;

    // Condition to stop the game when there is a winner
    if (score0 >= 20) {
        playing = false;
        player0.classList.add("player--winner");
        player0.classList.remove("player--active");
    } else if (score1 >= 20){
        playing = false;
        player1.classList.add("player--winner");
        player1.classList.remove("player--active");
    }
})

newMatchBtn.addEventListener("click", () => {
    playing = true;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player1.classList.remove("active--player");
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    dice.classList.add('hidden');
    currentScore = 0;
    current0.textContent = currentScore;
    current1.textContent = currentScore;
    activePlayer = 0;
    score0 = 0;
    score1 = 0;

})