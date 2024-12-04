const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDice1 = `./images/dice${randomNumber1}.png`;

const player1 = document.querySelector(".player1 img");
player1.setAttribute("src", randomDice1);

// FOR DICE TWO (2)
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDice2 = `./images/dice${randomNumber2}.png`;
const player2 = document.querySelector(".player2 img");
player2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = '🏆 Player One Won!!!'
}

else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').textContent = '🏆 Player Two Won!!!'
} else if(randomNumber1 === randomNumber2){
    document.querySelector('h1').textContent = '📍 DRAW!!!'
}