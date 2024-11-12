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
