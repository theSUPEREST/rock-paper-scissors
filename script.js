

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

let playerPoints = 0;   
let computerPoints = 0; 
let matchResult;
function incrementPoints() {  
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

function resetPoints() {
    playerPoints = 0;
    computerPoints = 0;
    console.log("reset");
}

function playOneRound (e) { 
    playerSelection = e.target.id;
    document.querySelector('div.player-card').textContent = playerSelection;
    console.log("You chose " + playerSelection);
    computerPlay(); 
    document.querySelector('div.cpu-card').textContent = computerSelection;
    console.log("CPU chose " + computerSelection); 
    matchResult = compareSelections(playerSelection, computerSelection); 
    document.querySelector('div.message').textContent = matchResult;
    console.log(matchResult);
    incrementPoints();
    console.log("Player: " + playerPoints + " CPU: " + computerPoints);
    document.querySelector('.player-score-display > p').textContent = playerPoints;
    document.querySelector('.cpu-score-display > p').textContent = computerPoints;
    if ( playerPoints >= 5 ) { 
        alert("Player Win")
        resetPoints();
    }
    if ( computerPoints >= 5 ) { 
        alert("CPU Win")
        resetPoints();
    }
}
