let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let roundText = document.getElementById('round');
let resultMessage;

function computerPlay() {
    let arr = ['rock', 'paper', 'scissors']; // Initalise array with possible moves
    computerChoice = arr[Math.floor(Math.random() * arr.length)]; // Choose a move from array at random
    return computerChoice;
}

function playRound() {
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') || 
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        resultMessage = 'Congratulations, you won this round!';
    } else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        resultMessage = 'Unlucky, you lost this round!';
    } else {
        resultMessage = "You drew this round!";
    }

}

function game() {    
    round++;
    computerPlay();
    
    playerChoice = this.id;
    
    console.log('Round: ' + round +
    '\nComputer move: ' + computerChoice +
    '\nPlayer move: ' + playerChoice);
    
    playRound();
    document.getElementById('player-scorecard').innerHTML = playerScore;
    document.getElementById('computer-scorecard').innerHTML = computerScore;
    
    if (round < 5) {
        roundText.innerHTML = 'Round ' + (round + 1);
        document.getElementById('result-message').innerHTML = resultMessage;
    } else if (round === 5) {
        document.getElementById('result-message').innerHTML = '';
        if (playerScore > computerScore) {
            roundText.innerHTML = 'Congratulations, you win!';
        } else if (computerScore > playerScore) {
            roundText.innerHTML = 'Too bad, you lost the game!';
        } else {
            roundText.innerHTML = "It's a draw!";
        }
        document.getElementById('selection-buttons-1').style.display = 'none';
        document.getElementById('selection-buttons-2').style.display = 'block';
    }

    console.log(resultMessage);
}

let gameToggle = function () {
    let x = document.getElementById('play-button-container');
    let y = document.getElementById('game-in-play-container');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'flex';
    }
}

let playAgainButton = function () {
    round = 0;
    playerScore = 0;
    computerScore = 0;

    document.getElementById('player-scorecard').innerHTML = 0;
    document.getElementById('computer-scorecard').innerHTML = 0;
    roundText.innerHTML = 'Round 1';
    
    let x = document.getElementById('selection-buttons-2');
    let y = document.getElementById('selection-buttons-1');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
    }

    console.log(round);
}


document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game;
document.getElementById('scissors').onclick = game;
document.getElementById('play-button').onclick = gameToggle;
document.getElementById('quit-button').onclick = gameToggle;
document.getElementById('play-again').onclick = playAgainButton;