let buttonClick = function () {
    let playerChoice = this.id;
    console.log(playerChoice);        
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

document.getElementById('play-button').onclick = gameToggle;
document.getElementById('quit-button').onclick = gameToggle;

document.getElementById('rock').onclick = buttonClick;
document.getElementById('paper').onclick = buttonClick;
document.getElementById('scissors').onclick = buttonClick;