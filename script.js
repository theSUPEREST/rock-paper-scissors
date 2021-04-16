

//CPU randomly chooses rock paper or scissors
    //create variables to store cpu selection and player selection
let computerSelection;   
let playerSelection
    //function to randomly choose one of three selections
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3); //cpu chose int between 0 and 2. 
    if (randomNumber === 0) {  //store random selection as cpu selection variable
        computerSelection = "rock" //0 = rock, 1 = paper, 2 = scissors
    } else if (randomNumber === 1) {
        computerSelection = "paper"
    } else { computerSelection = "scissors" };
    console.log(computerSelection); //Testing function
};

function playerChoice() { // create function
    playerSelection = prompt("rock paper scissors"); // Give user the choice to input rock, paper, or scissors

    if (playerSelection !== null) { // if user does not cancel...
        playerSelection = playerSelection.toLowerCase(); // convert string to lowercase
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors" ) { // check if response is valid (rock, paper or scissors)
            console.log(playerSelection); // testing
        } else {
            alert("Invalid"); // if input is not rock, paper or scissors, show invalid message and
            playerChoice();  // rerun the function
        }
    } else {
        alert("Okay, maybe another time"); // if user does cancel, show message. 
    }
} 


//   User inputs rock, paper, or scissors

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