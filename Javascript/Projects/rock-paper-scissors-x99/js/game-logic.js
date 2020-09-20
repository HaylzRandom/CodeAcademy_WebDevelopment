// All code should be written in this file.

let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue,
    playerOneWins,
    playerTwoWins;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    // Checks that none of the values are null
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
        !moveThreeType || !moveThreeValue) {
      return;
    }

    // Checks that move types are either rock, paper or scissors
    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    // Checks that strength value in correct range
    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return
    }

    // Checks that overall strength values don't go over 99
    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }

    // Sets values for players
    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
};

// Checks that moves are either rock, paper or scissors
function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'scissors') || (moveType === 'paper');
}

// Checks that the strength value is above 1 and less than 100
function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}

// Gets the round winner
function getRoundWinner (roundNumber) {
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;
    }
}

// Calculates who wins in pairings
function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    // If Values are null
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        }
        else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        }
        else {
            return 'Tie';
        }
    }

    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else {
        if (playerTwoMoveType === 'paper') {
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
}

// Calculates who won overall
function getGameWinner() {

    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }

    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);

    if (playerOneWins > playerTwoWins) {
      return 'Player One';
    }
    else if (playerOneWins < playerTwoWins) {
      return 'Player Two';
    }
    else {
      return 'Tie';
    }
}

// Adds individual round wins
function addWin (winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    }
    else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
}

// Calculates what moves and strength values computer player will use
function setComputerMoves() {
    const moves = ['paper', 'scissors', 'rock'];
    const moveOneType = moves[Math.floor(Math.random() * 3)];
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) +1;
    moveThreeValue = 99 - moveOneValue - moveTwoValue;

    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
}

