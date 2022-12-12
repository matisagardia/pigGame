// Variables declaration

const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
let current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const newMatchBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//Setting values to 0 to start the game

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;



// Roll the dice

rollBtn.addEventListener("click", () => {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");

    //function to reduce code on each case

    function diceToScore() {
        currentScore += diceNumber;
        current0.textContent = currentScore;
    }

    // Conditionals for each number
    if(diceNumber == 1) {
        dice.src = './images/dice-1.png';
        diceToScore();
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
})