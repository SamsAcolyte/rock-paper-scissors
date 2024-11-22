// Create scores
let humanScore = 0;
let computerScore = 0;
let isGameActive = true; // Flag to control game activity

// DOM elements
const humanScoreOutput = document.querySelector('#hs');
const computerScoreOutput = document.querySelector('#cs');
const resetButton = document.querySelector('.reset');
const roundLogContainer = document.querySelector('.roundLog');
const playButtons = document.querySelectorAll('.humanOptions button');

// DONUT 
let isDonutVerified = false; // Track if Donut has verified

// Get buttons and add event listeners
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if game is inactive
        if (!isGameActive) {
            // If Donut is not verified, prompt for password
            if (!isDonutVerified) {
                const donut = prompt('Are you donut? If so, enter the password:', '');
                if (donut === 'I love unicorns') {
                    isDonutVerified = true; // Mark Donut as verified
                    isGameActive = true; // Reactivate the game
                    updateScores(); // Update both scores immediately
                    alert("Welcome back, Donut! The game is active again.");
                } else {
                    alert("You're not donut.");
                    return; // Stop further processing
                }
            } else {
                alert("Game is inactive. Please reset the game.");
                return; // Prevent playing without resetting
            }
        }

        // Normal gameplay
        const humanChoice = button.value;
        play(humanChoice);
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

// Function to update scores for Donut
function updateScores() {
    humanScoreOutput.textContent = humanScore;
    computerScoreOutput.textContent = computerScore;
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
    isGameActive = false; // Stop the game after winner is announced
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
    isDonutVerified = false; // Reset Donut verification so they need to enter password again
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
    finalMessage.textContent = 'ah 💦 💦 ';
    roundLogContainer.appendChild(finalMessage);

    // Deactivate the game after lesbianism scenario, but allow Donut to keep playing
    if (!isDonutVerified) {
        isGameActive = false; // Stop the game
    }
}
