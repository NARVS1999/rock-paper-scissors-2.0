// console.log('Hello, World!')
/*
Write a function call game()
Call the playRound() inside the game()
make it 5 round :use console.log();
show the score in each round :use console.log();
show the winner or loser after the 5 round :use console.log();
*/
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return 'Rock';
        
    } else if (randomNum === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    
    switch(true) {
        case playerSelection === 'paper' && computerSelection === 'Rock':
            ++playerScore;
            return 'You Win this round! Paper beats Rock';
            break;
        case playerSelection === 'scissors' && computerSelection === 'Rock':
            ++computerScore;
            return 'You Lose this round! Rock beats Scissors';
            break;
        case playerSelection === 'rock' && computerSelection === 'Paper':
            ++computerScore;
            return 'You Lose this round! Paper beats Rock';
            break;
        case playerSelection === 'scissors' && computerSelection === 'Paper':
            ++playerScore;
            return 'You Win this round! Scissors beats Paper';
            break;
        case playerSelection === 'rock' && computerSelection === 'Scissors':
            ++playerScore;
            return 'You Win this round! Rock beats Scissors';
            break;
        case playerSelection === 'paper' && computerSelection === 'Scissors':
            ++computerScore;
            return 'You Lose this round! Scissors beat Paper';
            break;
        default:
            return 'The round is draw';
    }

} 
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector('.buttons');
const message = document.querySelector('#message');
const score = document.querySelector('#score');
const container = document.querySelector('.container');
const buttonForRock = document.createElement('div');
const buttonForPaper = document.createElement('div');
const buttonForScissors = document.createElement('div');
const buttonForRestart = document.createElement('button');

const rockImage = document.createElement('img');
rockImage.src = 'image/rock.jpg';
buttonForRock.appendChild(rockImage);

const paperImage = document.createElement('img');
paperImage.src = 'image/paper.jpg';
buttonForPaper.appendChild(paperImage);

const scissorsImage = document.createElement('img');
scissorsImage.src = 'image/scissors.jpg';
buttonForScissors.appendChild(scissorsImage);

score.textContent = `YOUR SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;
message.textContent = 'PICK A CHOICE';
score.setAttribute('class', 'text-style');
message.setAttribute('class', 'text-style');
// buttonForRock.textContent = 'Rock';
// buttonForPaper.textContent = 'Paper';
// buttonForScissors.textContent = 'Scissors';
buttonForRock.setAttribute('class', 'button-style');
buttonForPaper.setAttribute('class', 'button-style');
buttonForScissors.setAttribute('class', 'button-style');
buttonForRestart.textContent = 'RESTART';

buttonForRock.addEventListener('click', selectRock);
buttonForPaper.addEventListener('click', selectPaper);
buttonForScissors.addEventListener('click', selectScissors);
buttonForRestart.addEventListener('click', newGame);

buttons.appendChild(buttonForRock);
buttons.appendChild(buttonForPaper);
buttons.appendChild(buttonForScissors);

function restartGame() {
    message;
    if(playerScore > computerScore) {
        message.textContent = "YOU WIN THIS GAME!";
    } else {
        message.textContent = "COMPUTER WIN THIS GAME!";
    }

    buttonForRock.parentNode.removeChild(buttonForRock);
    buttonForPaper.parentNode.removeChild(buttonForPaper);
    buttonForScissors.parentNode.removeChild(buttonForScissors);
    buttons.appendChild(buttonForRestart);
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    message.textContent = 'PICK A CHOICE';
    score.textContent = `YOUR SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;

    buttons.appendChild(buttonForRock);
    buttons.appendChild(buttonForPaper);
    buttons.appendChild(buttonForScissors);
    buttonForRestart.parentNode.removeChild(buttonForRestart);
}

function selectRock() {
    let computerSelection = computerPlay();
    let playerSelection = 'rock';
    message.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `YOUR SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;

    message.classList.toggle("rotate");

    if(playerScore === 5 || computerScore === 5) {
        restartGame();
    }
}

function selectPaper() {
    let computerSelection = computerPlay();
    let playerSelection = 'paper';
    message.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `YOUR SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;

    message.classList.toggle("rotate");

    if(playerScore === 5 || computerScore === 5) {
        restartGame();
    }
}

function selectScissors() {
    let computerSelection = computerPlay();
    let playerSelection = 'scissors';
    message.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `YOUR SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;

    message.classList.toggle("rotate");

    if(playerScore === 5 || computerScore === 5) {
        restartGame();
    }  
}



