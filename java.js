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

        if ((computerChoice === 'rock' && humanChoice === 'rock')
            || (computerChoice === 'paper' && humanChoice === 'paper')
            || (computerChoice === 'scissors' && humanChoice === 'scissors')
        )
        {
            alert ('Draw!')
        }
        


        // Computer chose rock

        else if (computerChoice === 'rock' && humanChoice === 'paper') {
            alert ('You win! Computer chose rock')
        }
        else if (computerChoice === 'rock' && humanChoice === 'scissors'){
            alert ('You lose! Computer chose rock')
        }


        // Computer chose paper

        else if (computerChoice === 'paper' && humanChoice === 'scissors'){
            alert ('You win! Computer chose paper')
        }
        else if (computerChoice === 'paper' && humanChoice === 'rock'){
            alert ('You lose! Computer chose paper')
        }

        // computer chose scissors

        else if (computerChoice === 'scissors' && humanChoice === 'rock'){
            alert ('You win! Computer chose scissors')
        }
        else if (computerChoice === 'scissors' && humanChoice === 'paper'){
            alert ('You lose! Computer chose scissors')
        }
    }
