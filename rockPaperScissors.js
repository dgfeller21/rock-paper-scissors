console.log("hello");
const choices = ['Rock', 'Paper', 'Scissors'];
getComputerChoice();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}
playRound();
function playRound() {
    let computerPoints = 0;
    let playerPoints = 0;
    for(let i = 0; i < 5; i++) {
        playSelection = prompt("choose Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();
        if (playSelection == computerSelection) {
            console.log("tie");
        } else if (playSelection == 'Rock' && computerSelection == 'Paper') {
            console.log("computer wins");
            computerPoints++;
        } else if (playSelection == 'Paper' && computerSelection == 'Rock') {
            console.log("player wins");
            playerPoints++;
        } else if (playSelection == 'Rock' && computerSelection == 'Scissors') {
            console.log("player wins");
            playerPoints++;
        } else if (playSelection == 'Scissors' && computerSelection == 'Rock') {
            console.log("computer wins")
            computerPoints++;
        } else if (playSelection == 'Paper' && computerSelection == 'Scissors') {
            console.log("computer wins");
            computerPoints++;
        } else if (playSelection == 'Scissors' && computerSelection == 'Paper') {
            console.log("player wins");
            playerPoints++;
        } else {
            console.log("error");
            i--;
        }
    }
    if (computerPoints > playerPoints) {
        console.log("computer wins the game");
    } else if (playerPoints > computerPoints) {
        console.log("player wins the game");
    } else {
        console.log("tie game");
    }
}