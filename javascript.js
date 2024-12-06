
function getComputerChoice() {
    let element = Math.random();
    if (element >= 0 && element <= 0.33) { 
        return "rock";
    } else if (element > 0.33 && element <= 0.66) {
       return "paper";
    } else {
        return "scissors";
    };
};

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

playGame()
