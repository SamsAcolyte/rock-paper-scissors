// Create variable computerChoice
    let computerChoice;

// Create variable humanChoice
    let humanChoice;


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

// Create function getHumanChoice
    function getHumanChoice (){
        humanChoice = prompt('Choose!');
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
            alert ('You win!')
        }

        // Human lose

        else {
            alert ('You lose!')
        }
    }
