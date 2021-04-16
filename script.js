

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
    playerChoice();
    console.log("You chose " + playerSelection)
    computerPlay();
    console.log("CPU chose " + computerSelection);
    console.log(compareSelections(playerSelection, computerSelection));
}

// create function which runs computer choice and player choice and stores both values



// create function which takes computerSelection and playerSelection and
/* Compare the choices to see who won
    if both choices are the same, its a draw
    otherwise if user chose rock
        if cpu chose paper, cpu win
        if cpu chose scissors, user win
    otherwise if user chose paper then
        if cpu chose scissors, cpu win
        if cpu chose rock, user win
    otherwise if user chose scissors
        if cpu chose rock, cpu win
        if cpu chose paper, user win
Tell the user who won (or draw)
If user won, give user 1 point
if cpu won, give cpu 1 point
(if draw, no points)
repeat for 5 games, keeping track of points
at the end of 5 games, whoever has the most points is the winner winner
tell user who the true winner is
*/