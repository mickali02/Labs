// Exercise 20: Memory Card Game - FINAL CHALLENGE!
const gameBoard = document.getElementById('game-board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const pairsDisplay = document.getElementById('pairs');
const newGameBtn = document.getElementById('new-game-btn');
const winMessage = document.getElementById('win-message');

let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;
let canClick = true;
let gameStarted = false;

// TODO Part 1: Handle card clicks using event delegation
// HINT: Listen for clicks on gameBoard
// HINT: Check if clicked element is a memory-card
// HINT: Start timer on first click if not already started
// HINT: Don't allow clicking if canClick is false
// HINT: Don't allow clicking already flipped or matched cards
// HINT: Add 'flipped' class to card
// HINT: Add card to flippedCards array
// HINT: If 2 cards flipped, check for match

// TODO Part 2: Check for match
// HINT: Compare data-symbol attributes of both cards
// HINT: If match: add 'matched' class, increment matchedPairs, update display
// HINT: If no match: remove 'flipped' after 1 second
// HINT: Increment moves counter
// HINT: Check if game is won (all pairs matched)

// TODO Part 3: Start/stop timer
// HINT: Use setInterval to increment timer every second
// HINT: Update timerDisplay
// HINT: Clear interval when game ends

// TODO Part 4: Handle new game
// HINT: Reset all variables
// HINT: Clear timer interval
// HINT: Shuffle cards
// HINT: Remove flipped and matched classes

// Your code here:

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    moves++;
    movesDisplay.textContent = moves;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        pairsDisplay.textContent = matchedPairs;
        if (matchedPairs === 6) {
            stopTimer();
            winMessage.textContent = `You won in ${moves} moves and ${timer} seconds! 🎉`;
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];
    canClick = true;
}

function shuffleCards() {
    const cards = Array.from(gameBoard.children);
    cards.sort(() => Math.random() - 0.5);
    cards.forEach(card => gameBoard.appendChild(card));
}

gameBoard.addEventListener('click', (e) => {
    const card = e.target.closest('.memory-card');
    if (!card || !canClick || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        canClick = false;
        setTimeout(checkForMatch, 500);
    }
});

newGameBtn.addEventListener('click', () => {
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    timer = 0;
    canClick = true;
    gameStarted = false;

    movesDisplay.textContent = moves;
    pairsDisplay.textContent = matchedPairs;
    timerDisplay.textContent = timer;
    winMessage.textContent = '';

    document.querySelectorAll('.memory-card').forEach(card => {
        card.classList.remove('flipped', 'matched');
    });

    stopTimer();
    shuffleCards();
});
