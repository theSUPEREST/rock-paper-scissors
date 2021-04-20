

let computerSelection;   
let playerSelection

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

function compareSelections(playerSelection, computerSelection) { // compares selections to see result of the round
    switch(true) {
        case (playerSelection === computerSelection): // if both same, Draw
            return "draw";
        case (playerSelection === "rock"):
            if (computerSelection === "scissors") { return "win" } else { return "lose" } ;
        case (playerSelection === "paper"):
            if (computerSelection === "rock") {return "win"}  else {return "lose"} ;
        case (playerSelection === "scissors"):
            if (computerSelection === "paper") {return "win"}  else {return "lose"} ;
    }
}

function playOneRound () { 
    playerChoice(); // player chooses
    console.log("You chose " + playerSelection) // logs player choice
    computerPlay(); // cpu chooses randomly
    console.log("CPU chose " + computerSelection); // logs cpu choice
    let matchResult = compareSelections(playerSelection, computerSelection); // compares choices to see who won
    return matchResult // return result (win/lose/draw)
}



function game() {
    
    let playerPoints = 0;   //Create variable to track user wins, starting at 0
    let computerPoints = 0;   //Create variable to track cpu wins, starting at 0
    let matchResult = playOneRound() ;  // create a function that plays one round and reports whether win/lose/draw
    function incrementWinnersPoints() {  // function to increment winners points by 1 (no points if draw)
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

    if (playerPoints > computerPoints) { //after 5 games, compare amount of user wins to cpu wins to see who wins the set
        console.log("Ultimate victory");  //tell user who the true winner is
    } else if (playerPoints < computerPoints) {
        console.log("Crushing defeat")
    } else {
        console.log("Evenly matched");
    }
} 