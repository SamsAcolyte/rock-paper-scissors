// create scores
let humanScore = 0;
let computerScore =0;

// Create humanChoice
let humanChoice;
// Create function getHumanChoice
function getHumanChoice() {
     
}



// link scores
const humanScoreOutput = document.querySelector('#hs');
const computerScoreOutput = document.querySelector('#cs');


// Get buttons and add event listeners to them
const playButton= document.querySelectorAll('.humanOptions button');

playButton.forEach(button => {
    
    button.addEventListener('click',  () => {  
        humanChoice = button.value;
        play();

        }
    )
})


// Create funciton getComputerChoice
function getComputerChoice (){
    const randomNumber = Math.random()
    if (randomNumber <= 0.333) {
        return 'rock'
    }
    else if (randomNumber <= 0.666) {
        return 'paper'
    }
    else {return 'scissors'}
}

// create function determineWinner
function determineWinner (computer, human) {
    if (computer === human) {
        return 'draw'
    }
    if ((computer === 'rock' && human === 'paper')
        || (computer === 'paper' && human === 'scissors')
        || (computer === 'scissors' && human === 'rock')) {
            return 'human'
        }
    else { return 'computer'}    
}

// create function play
function play () {

    if (!humanChoice || humanChoice === 'didNotChoose') {
        alert('You did not choose!');
        return;
    }
    if (humanScore === 3 || computerScore === 3) {
        humanScore = 0;
        computerScore = 0;
        humanScoreOutput.textContent = humanScore;
        computerScoreOutput.textContent = computerScore;
        playButton.textContent = 'Play!';
        alert('New game started!');
    }
    const computerChoice = getComputerChoice();
    const winner = determineWinner (computerChoice, humanChoice)
    
    alert(`You chose ${humanChoice}, Computer chose ${computerChoice}`);
   
    if (winner === 'computer') {
        computerScore++;
        computerScoreOutput.textContent = computerScore;
        alert ('You lost the round')
    }
    else if (winner === 'human') {
        humanScore++;
        humanScoreOutput.textContent = humanScore;
        alert ('You won the round')
    }
    else {alert ('draw')}

    if (humanScore === 3) {
        alert('HURRAY! You won the game!');
        playButton.textContent = 'Play again!';
    } else if (computerScore === 3) {
        alert('OH NO! You lost the game!');
        playButton.textContent = 'Play again!';
    }
}