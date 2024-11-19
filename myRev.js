// Create scores
let humanScore = 0;
let computerScore = 0;
let isGameActive = true; // Flag to control game activity

// DOM elements
const humanScoreOutput = document.querySelector('#hs');
const computerScoreOutput = document.querySelector('#cs');
const resetButton = document.querySelector('.reset');
const roundLogContainer = document.querySelector('.roundLog');

// Get buttons and add event listeners
const playButtons = document.querySelectorAll('.humanOptions button');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isGameActive) {
            const humanChoice = button.value;
            play(humanChoice);
        }
    });
});

// Get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner of a round
function determineWinner(computer, human) {
    if (computer === human) return 'draw';
    if (
        (computer === 'rock' && human === 'scissors') ||
        (computer === 'paper' && human === 'rock') ||
        (computer === 'scissors' && human === 'paper')
    ) {
        return 'computer';
    }
    return 'human';
}

// Play a round
function play(humanChoice) {
    const computerChoice = getComputerChoice();

    // Check for "lesbianism"
    if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        lesbianism();
        return;
    }

    const winner = determineWinner(computerChoice, humanChoice);

    // Update scores and log
    if (winner === 'computer') {
        computerScore++;
        computerScoreOutput.textContent = computerScore;
    } else if (winner === 'human') {
        humanScore++;
        humanScoreOutput.textContent = humanScore;
    }
    logRound(humanChoice, computerChoice, winner);

    // Check if the game is over
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Log the results of a round
function logRound(human, computer, winner) {
    const log = document.createElement('li');
    log.textContent = `You played ${human}, computer played ${computer}. ${
        winner === 'draw' ? "It's a draw!" : `${winner} wins the round!`
    }`;
    roundLogContainer.appendChild(log);
}

// Announce the winner
function announceWinner() {
    const finalMessage = document.createElement('p');
    finalMessage.style.fontWeight = 'bold';
    finalMessage.style.color = 'green';
    finalMessage.textContent =
        humanScore === 5
            ? 'wow u won...'
            : '💻 🎉 COMPUTER WON! U SUCK DICK GEH 💻 🎉';
    roundLogContainer.appendChild(finalMessage);
    isGameActive = false; // Stop the game
}

// Reset the game
resetButton.addEventListener('click', resetGame);

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreOutput.textContent = humanScore;
    computerScoreOutput.textContent = computerScore;
    roundLogContainer.innerHTML = ''; // Clear the log
    document.body.style.backgroundColor = ''; // Reset background color
    isGameActive = true; // Reactivate the game
    alert('The game has been reset. Play again!');
}

// Handle "lesbianism" scenario
function lesbianism() {
    const log = document.createElement('li');
    log.textContent = `You played scissors, computer played scissors. It's lesbianism. 🌈`;
    roundLogContainer.appendChild(log);

    document.body.style.backgroundColor = '#FFC0CB'; // Change background to pink
    humanScoreOutput.textContent = '✂️';
    computerScoreOutput.textContent = '✂️';

    const finalMessage = document.createElement('p');
    finalMessage.style.fontWeight = 'bold';
    finalMessage.style.color = 'red';
    finalMessage.textContent = 'AH 💦 💦 ';
    roundLogContainer.appendChild(finalMessage);

    isGameActive = false; // Stop the game
}
