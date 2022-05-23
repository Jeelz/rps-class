const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput ==='paper') { 
        return userInput
    } else {
        console.log('Error. Please type in rock, paper or scissors.')
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return 'rock'
    } 
    else if
    (randomNumber === 1) {
        return 'paper'
    }
    else if(randomNumber === 2) {
        return 'scissors'
    }
};

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
        return "Computer won!";
    } else {
        return "You won!"
    }
    }
 if (userChoice === 'paper' ) {
     if (computerChoice === 'scissors') {
         return "Computer won!";
     } else {
         return "You won!"
     }
     }
if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        return "Computer won!";
    } else {
        return "You won!"
    }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw' + userChoice);
    console.log('Computer threw' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
