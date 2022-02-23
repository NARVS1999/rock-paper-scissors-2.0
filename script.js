console.log('Hello, World!')
/*
Write a function call game()
Call the playRound() inside the game()
make it 5 round :use console.log();
show the score in each round :use console.log();
show the winner or loser after the 5 round :use console.log();
*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
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
        playerSelection = playerSelection.toLowerCase();
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
                ++computerScore
                return 'You Lose this round! Scissors beat Paper';
                break;
            default:
                return 'The round is draw';
        }
    
    } 

    for(let i = 1; i <= 5; i++) {
        const playerSelection = prompt('type your choice:');
        const computerSelection = computerPlay();
        console.log("Round " + i);
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player Score: ' + playerScore + ' | ' + 'Computer Score: ' + computerScore);
    }
    
    if(playerScore > computerScore) {
        console.log("You Win!, the game Awesome");
    } else if (playerScore < computerScore) {
        console.log("Computer Win!, You Lose the game.")
    } else {
        console.log("The game result was draw.");
    }
}

game();