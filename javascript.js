
function getComputerChoice() {
    let element = Math.random();
    if (element >= 0 && element <= 0.33) { 
        return "rock";
    } else if (element > 0.33 && element <= 0.66) {
       return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let element = prompt("Type rock, paper or scissors")
    if (element.toLowerCase() == "rock") {
        return "rock";
    } else if (element.toLowerCase() == "paper") {
        return "paper";
    } else if (element.toLowerCase() == "scissors") {
        return "scissors";
    } 
}

let humanScore = 0;
let computerScore = 0;

/* FUNCTION TO PLAY A SINGLE ROUND

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw! Computer chose rock. Rock and rock smash each other");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose!Computer chose paper. Paper wraps rock");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Computer chose scissors. Rock smashes scissors");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Computer chose rock. Paper wraps rock");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw! Computer chose paper. Paper and paper wrap each other")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Computer chose scissors. Scissors cuts paper");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Computer chose rock. Rock smashes scissors");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Computer chose paper. Scissors cuts paper");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Draw! Scissors are having trouble cutting eachother");
    } else console.log("Wrong user input")
}

*/

function playGame() {

    // Declare playRound function

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Draw! Computer chose rock. Rock and rock smash each other");
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose!Computer chose paper. Paper wraps rock");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Computer chose scissors. Rock smashes scissors");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Computer chose rock. Paper wraps rock");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Draw! Computer chose paper. Paper and paper wrap each other")
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Computer chose scissors. Scissors cuts paper");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Computer chose rock. Rock smashes scissors");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Computer chose paper. Scissors cuts paper");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Draw! Scissors are having trouble cutting eachother");
        } else console.log("Wrong user input")
    };

    // Add an event listener to each button that calls playRound()

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
};

// Call the function to play the game
playGame()

// STORE CODE

/* 

// Invoke playRound function 5 times and print the score after each round. 
    // Declare humanSelection and computerSelection variables at start of each round.
    // Round 1

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore); 
    console.log("Computer Score: " + computerScore);

    // Round 2

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore); 
    console.log("Computer Score: " + computerScore);

    // Round 3

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore); 
    console.log("Computer Score: " + computerScore);

    // Round 4

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore); 
    console.log("Computer Score: " + computerScore);

    // Round 5

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore); 
    console.log("Computer Score: " + computerScore);

    // Declare if the user wins or lost the game 
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore == computerScore) {
        console.log("It's a draw!")
    } else {
        console.log("You lost the game!");
    }

*/