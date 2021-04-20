// Version One of the project where you have to type in the console to play

//CPU randomly chooses rock paper or scissors
    //create variables to store cpu selection and player selection
let computerSelection;   
let playerSelection
    //function to randomly choose one of three selections

function createRandomNumber() {
    return Math.floor(Math.random() * 3); //cpu chose int between 0 and 2.
} 
function computerPlay() {
    let randomNumber = createRandomNumber(); //run random number generator (1-3) and store as variable
    if (randomNumber === 0) {  //store random selection as cpu selection variable
        computerSelection = "rock"  //0 = rock 
    } else if (randomNumber === 1) {
        computerSelection = "paper"  //1 = paper
    } else { computerSelection = "scissors" };  //2 = scissors
    return computerSelection; //Testing function
};

function playerChoice() { // create function
    playerSelection = prompt("rock paper scissors"); // Give user the choice to input rock, paper, or scissors
    if (playerSelection !== null) { // if user does not cancel...
        playerSelection = playerSelection.toLowerCase(); // convert string to lowercase
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors" ) { // check if response is valid (rock, paper or scissors)
        } else {
            alert("Invalid"); // if input is not rock, paper or scissors, show invalid message and
            playerChoice();  // rerun the function
        }
    } else {
        alert("Okay, maybe another time"); // if user does cancel, show message. 
    }
    return playerSelection; //
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