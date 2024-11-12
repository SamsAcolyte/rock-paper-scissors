// Create variable computerChoice
    let computerChoice

// Create variable humanChoice
    let humanChoice

// Create score variables
let humanScore = Number (document.querySelector('#hs').textContent)
let computerScore = Number (document.querySelector('#cs').textContent)

// Create variable for play button
const playButton = document.querySelector('.playButton')

// Create variable for select element
const select = document.getElementById('selectOption')

// Create event listener to human choice
    select.addEventListener('change', function getHumanChoice(){
        humanChoice = select.value})


        
// Create function getComputerChoice
    function getComputerChoice(){

    computerChoice= Math.random();

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
        alert (`You threw ${humanChoice} and Computer threw ${computerChoice}`)
        
        
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
            document.querySelector('#hs').textContent = humanScore;
            if (humanScore === 3){
                alert ('HURRAY! you won the game!')
                document.querySelector('.playButton').textContent = 'Play again!'
            }
            else {
            alert ('You win the round!');
            }
        }

        
        // Human lose

        else {
            computerScore += 1;
            document.querySelector('#cs').textContent = computerScore;
            if (computerScore === 3){
                alert ('OH NO! You lost the game!')
                document.querySelector('.playButton').textContent = 'Play again!'
            }
            else {
            alert ('You lose the round!');
            }
        }
    }

// Create function play
    function play (){

        if (humanChoice === undefined || humanChoice === 'didNotChoose'){
            alert ('You did not choose!')
        }

        else if (humanScore === 3 || computerScore === 3) {
           
            humanScore = 0;
            computerScore = 0;
            
            document.querySelector('#hs').textContent = humanScore;
            document.querySelector('#cs').textContent = computerScore;
            
            document.querySelector('.playButton').textContent = 'Play!'

            getComputerChoice();
            determineWinner();
        }
        
        else {
            getComputerChoice();
            determineWinner();
        }
    }



// Add event listener to button
playButton.addEventListener('click',play)





