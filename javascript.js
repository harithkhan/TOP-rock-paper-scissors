
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

// Display Score

let humanScore = 0;
let computerScore = 0;
const displayHumanScore = document.querySelector(".displayHumanScore");
const displayComputerScore = document.querySelector(".displayComputerScore");

function updateScore() {
    displayHumanScore.textContent = "Human Score: " + humanScore;
    displayComputerScore.textContent = "Computer Score: " + computerScore;
};

updateScore();

function playGame() {

    // Declare playRound function

    function playRound(humanChoice, computerChoice) {
        const displayResult = document.querySelector(".displayResult");
        const container = document.querySelector(".container");
        if (humanChoice == "rock" && computerChoice == "rock") {
            displayResult.textContent = "Draw! Computer chose rock. Rock and rock smash each other";
            container.appendChild(displayResult);
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            displayResult.textContent = "You lose!Computer chose paper. Paper wraps rock";
            container.appendChild(displayResult);
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            displayResult.textContent = "You win! Computer chose scissors. Rock smashes scissors";
            container.appendChild(displayResult);
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            displayResult.textContent = "You win! Computer chose rock. Paper wraps rock";
            container.appendChild(displayResult);
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            displayResult.textContent = "Draw! Computer chose paper. Paper and paper wrap each other";
            container.appendChild(displayResult);
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            displayResult.textContent = "You lose! Computer chose scissors. Scissors cuts paper";
            container.appendChild(displayResult);
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            displayResult.textContent = "You lose! Computer chose rock. Rock smashes scissors";
            container.appendChild(displayResult);
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            displayResult.textContent = "You win! Computer chose paper. Scissors cuts paper";
            container.appendChild(displayResult);
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            displayResult.textContent = "Draw! Scissors are having trouble cutting eachother";
            container.appendChild(displayResult);
        } else {
            displayResult.textContent = "Wrong user input";
            container.appendChild(displayResult);
        };
        updateScore();
         // Declare if the user wins or lost the game 

        declareWinner = document.querySelector(".declareWinner");
        if (humanScore == 5) {
            declareWinner.textContent = "You win the game!";
            container.appendChild(declareWinner);
        } else if (computerScore == 5) {
            declareWinner.textContent = "You lost the game!";
            container.appendChild(declareWinner);
        };
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