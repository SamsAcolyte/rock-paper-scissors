// 1. Score Initialization

                        // Original Code:

// let humanScore = Number(document.querySelector('#hs').textContent);
// let computerScore = Number(document.querySelector('#cs').textContent);

                        // Refactored Code:


let humanScore = 0;
let computerScore = 0;
// Explanation: Initializing humanScore and computerScore directly as 0 
// removes the need to parse from the HTML, simplifying the setup.



// 2. Select Element Setup and Event Listener

                                // Original Code:

// const select = document.getElementById('selectOption');

// function getHumanChoice() { humanChoice = select.value }

// select.addEventListener('change', getHumanChoice);

                                // Refactored Code:


const select = document.querySelector('#selectOption');
let humanChoice;

select.addEventListener('change', function() {
    humanChoice = select.value;
});
// Explanation: Added `humanChoice` variable and assigned its value within an 
// anonymous function on the `change` event, removing the need for a separate 
// `getHumanChoice` function.



// 3. Generating the Computer’s Choice

                                // Original Code:

// function getComputerChoice() {
//     computerChoice = Math.random();

//     if (computerChoice <= 0.333) {
//         computerChoice = 'rock';
//     } else if (computerChoice > 0.333 && computerChoice <= 0.666) {
//         computerChoice = 'paper';
//     } else {
//         computerChoice = 'scissors';
//     }
// }

                                // Refactored Code:


function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.333) return 'rock';
    else if (computerChoice <= 0.666) return 'paper';
    return 'scissors';
}
// Explanation: Removed reassignment of `computerChoice` and returned 
// values directly based on conditions to streamline code.



// 4. Determining the Winner

                            // Original Code:

// function determineWinner() {
//     alert(`You threw ${humanChoice}, Computer threw ${computerChoice}`);
    
//     if (computerChoice === humanChoice) {
//         alert('Draw!');
//     } else if (
//         (computerChoice === 'rock' && humanChoice === 'paper') ||
//         (computerChoice === 'paper' && humanChoice === 'scissors') ||
//         (computerChoice === 'scissors' && humanChoice === 'rock')
//     ) {
//         humanScore += 1;
//         document.querySelector('#hs').textContent = humanScore;
//         if (humanScore === 3) {
//             alert('HURRAY! you won the game!');
//             document.querySelector('.playButton').textContent = 'Play again!';
//         } else {
//             alert('You win the round!');
//         }
//     } else {
//         computerScore += 1;
//         document.querySelector('#cs').textContent = computerScore;
//         if (computerScore === 3) {
//             alert('OH NO! You lost the game!');
//             document.querySelector('.playButton').textContent = 'Play again!';
//         } else {
//             alert('You lose the round!');
//         }
//     }
// }

                                    // Refactored Code:


function determineWinner(human, computer) {
    if (human === computer) return 'draw';
    if ((human === 'rock' && computer === 'scissors') ||
        (human === 'scissors' && computer === 'paper') ||
        (human === 'paper' && computer === 'rock')) return 'human';
    return 'computer';
}
// Explanation: Simplified `determineWinner` to return a string indicating 
// the result ('human', 'computer', or 'draw'), making it easier to process 
// the outcome in `play()` function without direct DOM manipulation.



// 5. play() Function: Checking for Reset and Updating Scores

                            // Original Code:

// function play() {
//     if (humanChoice === undefined || humanChoice === 'didNotChoose') {
//         alert('You did not choose!');
//     } else if (humanScore === 3 || computerScore === 3) {
//         humanScore = 0;
//         computerScore = 0;
//         document.querySelector('#hs').textContent = humanScore;
//         document.querySelector('#cs').textContent = computerScore;
//         document.querySelector('.playButton').textContent = 'Play!';
//         getComputerChoice();
//         determineWinner();
//     } else {
//         getComputerChoice();
//         determineWinner();
//     }
// }

                                // Refactored Code:


const humanScoreOutput = document.querySelector('#hs');
const computerScoreOutput = document.querySelector('#cs');
const playButton = document.querySelector('.playButton');

playButton.addEventListener('click', play);

function play() {
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
    const winner = determineWinner(humanChoice, computerChoice);

    alert(`You chose ${humanChoice}, Computer chose ${computerChoice}`);
    
    if (winner === 'human') {
        humanScore++;
        humanScoreOutput.textContent = humanScore;
        alert('You win this round!');
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreOutput.textContent = computerScore;
        alert('You lose this round!');
    } else {
        alert('It\'s a draw!');
    }
    
    if (humanScore === 3) {
        alert('HURRAY! You won the game!');
        playButton.textContent = 'Play again!';
    } else if (computerScore === 3) {
        alert('OH NO! You lost the game!');
        playButton.textContent = 'Play again!';
    }
}
// Explanation: In this refactored version of `play()`, an event listener 
// is added to `playButton`, and `play()` is modified to manage scores and 
// reset conditions more clearly. It now handles checking the humanChoice, 
// resets scores only when the game ends, and updates DOM elements directly.

