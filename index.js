// Button on Click start the fucntion
document.querySelector(".btn").onclick = function () {
    rollDice();
};

// Variables the random numbers for the Dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Start the Game
function rollDice() {
    showDice();
    showWinner();
    restart();
}

//Show Dice image
function showDice() {
    document
        .querySelector(".img1")
        .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

    document
        .querySelector(".img2")
        .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}

// Show Winner in H1
function showWinner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins !";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 Wins !";
    } else {
        document.querySelector("h1").innerText = "Draw";
    }
}

function restart() {
    setTimeout(() => location.reload(), 5000);
}  