

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

function showCPUImg (choice) {
    let cpuImg = document.querySelector(`.cpu-card > .${choice}-img`)
    cpuImg.classList.add("visible");    
}

function hideCPUImgs() {
    let cardImgs = document.querySelectorAll('.cpu-card > .card-img');
    cardImgs.forEach(item => item.classList.remove("visible"));
}

function flipCardCPU() {
    computerPlay();
    let cpuCard = document.querySelector('.cpu-card.card');
    if (cpuCard.classList.contains('flipped')) { 
        cpuCard.classList.remove('flipped');
        cpuCard.addEventListener('transitionend', () => {
            hideCPUImgs()
            showCPUImg(computerSelection);
            cpuCard.classList.add('flipped');
        }) 
    } else {
        showCPUImg(computerSelection);
        cpuCard.classList.add('flipped');
    }
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

function showPlayerImg (e) {
    let playerImg = document.querySelector(`.player-card > .${e.target.id}-img`)
    playerImg.classList.add("visible");    
}

function hidePlayerImgs() {
    let cardImgs = document.querySelectorAll('.player-card > .card-img');
    cardImgs.forEach(item => item.classList.remove("visible"));
}

function flipCardPlayer(e) {
    let playerCard = document.querySelector('.player-card.card');
    if (playerCard.classList.contains('flipped')) { 
        playerCard.classList.remove('flipped');
        playerCard.addEventListener('transitionend', () => {
            hidePlayerImgs()
            showPlayerImg(e);
            playerCard.classList.add('flipped');
        }) 
    } else {
        showPlayerImg(e);
        playerCard.classList.add('flipped');
    }
}

function playOneRound (e) { 
    playerSelection = e.target.id;
    flipCardPlayer(e);
    console.log("You chose " + playerSelection);
    flipCardCPU(); 
    console.log("CPU chose " + computerSelection); 
    matchResult = compareSelections(playerSelection, computerSelection); 
    document.querySelector('div.message').textContent = matchResult;
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
