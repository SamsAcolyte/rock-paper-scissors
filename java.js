// Create variable computerChoice
    let computerChoice;

// Create variable humanChoice
    let humanChoice;

// Create score variables
let humanScore = 0;
let computerScore = 0;

// Create variable for select element
    const select = document.getElementById('selectOption')

// Create event listener to human choice
    select.addEventListener('change', function getHumanChoice(){
        humanChoice = select.value
    })
// Create function getComputerChoice
    function getComputerChoice(){

    computerChoice= Math.random(computerChoice);

    if (computerChoice <= 0.333) {
        computerChoice ='rock'
    }
    else if (computerChoice > 0.333 && computerChoice <= 0.666){
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    }


// Create function determineWinner
    function determineWinner () {

        // alert computerChoice
        alert (`computer chose ${computerChoice} and you chose ${humanChoice} `)
        
        
        // Draw

        if (
            (computerChoice === 'rock' && humanChoice === 'rock')
            || (computerChoice === 'paper' && humanChoice === 'paper')
            || (computerChoice === 'scissors' && humanChoice === 'scissors')
            )
        {
            alert ('Draw!')
        }
        

        // Human win

        else if (
            (computerChoice === 'rock' && humanChoice === 'paper')
            || (computerChoice === 'paper' && humanChoice === 'scissors')
            || (computerChoice === 'scissors' && humanChoice === 'rock')
        )
        {
            humanScore += 1;
            alert ('You win!');
        }

        // Human lose

        else {
            computerScore += 1;
            alert ('You lose!');
        }
    }
// Create function play
    function play (){
        if (humanChoice === undefined || humanChoice === 'didNotChoose'){
            alert ('You did not choose!')
        }
        else {
            getComputerChoice();
            determineWinner();
        }
    }

// Create variable for play button
const playButton = document.querySelector('.playButton')

// Add event listener to button
playButton.addEventListener('click',play)



