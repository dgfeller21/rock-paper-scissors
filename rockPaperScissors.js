const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playSelection, computerSelection) {
    if (playSelection == computerSelection) {
        return "tie";
    } else if (playSelection == 'Rock' && computerSelection == 'Paper') {
        return "computer";
    } else if (playSelection == 'Paper' && computerSelection == 'Rock') {
        return "player";
    } else if (playSelection == 'Rock' && computerSelection == 'Scissors') {
        return "player";
    } else if (playSelection == 'Scissors' && computerSelection == 'Rock') {
        return "computer";
    } else if (playSelection == 'Paper' && computerSelection == 'Scissors') {
        return "computer";
    } else if (playSelection == 'Scissors' && computerSelection == 'Paper') {
        return "player";
    } else {
        console.log("error");
    }
}
const theWinner = document.querySelector("h3");
const buttons = document.querySelectorAll('.choices');
let tiePoints = 0;
let computerPoints = 0;
let playerPoints = 0;
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        console.log(this.textContent);
        let roundWinner = playRound(this.textContent, getComputerChoice());
        addTally(roundWinner)
        if(tiePoints + computerPoints + playerPoints >= 5) {
            let gameWinner = getWinner(computerPoints, playerPoints);
            winner.textContent = 'Winner: ' + gameWinner;
        }
    });
});

const playerTally = document.getElementById('player');
const tieTally = document.getElementById('tie');
const computerTally = document.getElementById('computer');
function addTally(winner) {
    if(winner == 'tie') {
        tiePoints++;
        tieTally.textContent = 'Tie: ' + tiePoints;
    } else if (winner == 'player') {
        playerPoints++;
        playerTally.textContent = 'Player: ' + playerPoints;
    } else {
        computerPoints++;
        computerTally.textContent = 'Computer: ' + computerPoints;
    }
}

const game = document.getElementById('game');
game.addEventListener('click', function() {
    tieTally.textContent = 'Tie: ' + 0;
    playerTally.textContent = 'Player: ' + 0;
    computerTally.textContent = 'Computer: ' + 0;
    winner.textContent = 'Winner';
    tiePoints = 0;
    computerPoints = 0;
    playerPoints = 0;
})

const winner = document.getElementById('winner');
function getWinner(computerPoints, playerPoints) {
    if (computerPoints > playerPoints) {
        return "Computer";
    } else if (playerPoints > computerPoints) {
        return "Player wins the game";
    } else {
        return "Tie game";
    }
}