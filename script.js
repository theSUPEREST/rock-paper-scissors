

let computerSelection;   
let playerSelection;

function createRandomNumber() {
    return Math.floor(Math.random() * 3);
} 
function computerPlay() {
    let randomNumber = createRandomNumber();
    if (randomNumber === 0) {
        computerSelection = "rock"
    } else if (randomNumber === 1) {
        computerSelection = "paper"
    } else { computerSelection = "scissors" };
    return computerSelection;
};

function playerChoice() {
    playerSelection = prompt("rock paper scissors");
    if (playerSelection !== null) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors" ) {
        } else {
            alert("Invalid");
            playerChoice();
        }
    } else {
        alert("Okay, maybe another time");
    }
    return playerSelection;
} 

let buttons = document.querySelectorAll('.button');

buttons.forEach(item => {
    item.addEventListener('click', playOneRound)
})

function compareSelections(playerSelection, computerSelection) { 
    switch(true) {
        case (playerSelection === computerSelection): 
            return "draw";
        case (playerSelection === "rock"):
            if (computerSelection === "scissors") { return "win" } else { return "lose" } ;
        case (playerSelection === "paper"):
            if (computerSelection === "rock") {return "win"}  else {return "lose"} ;
        case (playerSelection === "scissors"):
            if (computerSelection === "paper") {return "win"}  else {return "lose"} ;
    }
}

function playOneRound (e) { 
    playerSelection = e.target.id;
    document.querySelector('div.player-card').textContent = playerSelection;
    console.log("You chose " + playerSelection);
    computerPlay(); 
    document.querySelector('div.cpu-card').textContent = computerSelection;
    console.log("CPU chose " + computerSelection); 
    let matchResult = compareSelections(playerSelection, computerSelection); 
    document.querySelector('div.message').textContent = matchResult;
    console.log(matchResult);
}



function game() {
    
    let playerPoints = 0;   
    let computerPoints = 0;   
    let matchResult = playOneRound() ;  
    function incrementWinnersPoints() {  
        if (matchResult === "win") {  
            console.log(matchResult);
            ++playerPoints;
        } else if (matchResult === "lose") {
            console.log(matchResult);
            ++computerPoints;
        } else {
            console.log(matchResult);
        }
    }
    incrementWinnersPoints();
    console.log("Player: " + playerPoints + " CPU: " + computerPoints);

    matchResult = playOneRound() ;
    incrementWinnersPoints();
    console.log("Player: " + playerPoints + " CPU: " + computerPoints);

    matchResult = playOneRound() ;
    incrementWinnersPoints();
    console.log("Player: " + playerPoints + " CPU: " + computerPoints);

    matchResult = playOneRound() ;
    incrementWinnersPoints();
    console.log("Player: " + playerPoints + " CPU: " + computerPoints);

    matchResult = playOneRound() ;
    incrementWinnersPoints();
    console.log("Player: " + playerPoints + " CPU: " + computerPoints);

    if (playerPoints > computerPoints) { 
        console.log("Ultimate victory");  
    } else if (playerPoints < computerPoints) {
        console.log("Crushing defeat")
    } else {
        console.log("Evenly matched");
    }
} 