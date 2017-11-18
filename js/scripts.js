
// variables

var newGameElem = document.getElementById('js-newGameElement'), 
    newGameBtn = document.getElementById('js-newGameButton');


var playerPickElem = document.getElementById('js-playerPickElement'), 
    playerPickRock = document.getElementById('js-playerPick_rock'), 
    playerPaper = document.getElementById('js-playerPick_paper'), 
    playerPickScissors = document.getElementById('js-playerPick_scissors');

var resultsTableElem = document.getElementById('js-resultsTableElement'), 
    playerNameTable = document.getElementById('js-playerName'), 
    playerPointsTable = document.getElementById('js-playerPoints'), 
    computerPointsTable = document.getElementById('js-computerPoints'), 
    playerPickTable = document.getElementById('js-playerPick'), 
    computerPickTable = document.getElementById('js-computerPick'), 
    playerResultTable = document.getElementById('js-playerResult'), 
    computerResultTable = document.getElementById('js-computerResult');

var winnerInfo = document.getElementById('js-winnerInfo');

// game start

newGameBtn.addEventListener('click', newGame);

var player = {
    name: '',
    score: 0

},
computer = {
    score: 0
}

var gameState ='notStarted'; //started //ended

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        playerPickElem.style.display = 'block';
        resultsTableElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        playerPickElem.style.display = 'none';
        resultsTableElem.style.display = 'none';
  }
}
setGameElements();

function newGame()  {
    player.name = prompt('Podaj imię');
    if (player.name) {
        cleanScore();

        gameState = 'started';
        setGameElements(); 

        playerNameTable.innerHTML = player.name;
    }   
}

function cleanScore() {
    player.score = computer.score = 0;
    playerPointsTable.innerHTML = computerPointsTable.innerHTML = 0;
    playerResultTable.innerHTML = computerResultTable.innerHTML = '';
    playerPickTable.innerHTML = 'Player Selection';
    computerPickTable.innerHTML = 'Computer Selection';
    winnerInfo.innerHTML ='';
}

// player & computer pick 

playerPickRock.addEventListener('click', function () { playerPick('Rock'); });
playerPaper.addEventListener('click', function () { playerPick('Paper'); } );
playerPickScissors.addEventListener('click', function () { playerPick('Scissors'); } );

function getComputerPick() {
    var possiblePicks =['Rock', 'Paper', 'Scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    playerPickTable.innerHTML = playerPick;

    var computerPick = getComputerPick();
    computerPickTable.innerHTML = computerPick;
    
    checkWinner(playerPick, computerPick);
}

// who won? 

function checkWinner(playerPick, computerPick) {
    playerResultTable.innerHTML = computerResultTable.innerHTML = '';

    var winnerIs = 'Player'

    if (playerPick == computerPick) {
        winnerIs = 'remis!';
    } else if (
        (computerPick == 'Rock' && playerPick == 'Scissors') ||
        (computerPick == 'Paper' && playerPick == 'Rock') ||
        (computerPick == 'Scissors' && playerPick == 'Paper') ) {

        winnerIs = 'Computer';
    }

    if (winnerIs == 'Player') {
        playerResultTable.innerHTML = ' Win!';
        player.score++;


    } else if (winnerIs == 'Computer') {
        computerResultTable.innerHTML = 'Win!'; 
        computer.score++;
    }
    playerPointsTable.innerHTML = player.score;
    computerPointsTable.innerHTML = computer.score;

    if (player.score == 10) {
        winnerInfo.innerHTML = 'Winner is ' + player.name;
        gameState = 'ended';

    } else if (computer.score == 10) {
         winnerInfo.innerHTML = 'Winner is computer';
         gameState = 'ended';
    }
    setGameElements();
}





