const cardArray = [
    { name: 'A', id: 1 }, { name: 'A', id: 2 },
    { name: 'B', id: 3 }, { name: 'B', id: 4 },
    { name: 'C', id: 5 }, { name: 'C', id: 6 },
    { name: 'D', id: 7 }, { name: 'D', id: 8 },
    { name: 'E', id: 9 }, { name: 'E', id: 10 },
    { name: 'F', id: 11 }, { name: 'F', id: 12 },
    { name: 'G', id: 13 }, { name: 'G', id: 14 },
    { name: 'H', id: 15 }, { name: 'H', id: 16 },
];

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let matchedPairs = 0;

const gameBoard = document.getElementById('gameBoard');
const restartBtn = document.getElementById('restartBtn');

// Shuffle cards
function shuffleCards() {
    cardArray.sort(() => 0.5 - Math.random());
}

// Generate the game board
function generateBoard() {
    shuffleCards();
    gameBoard.innerHTML = '';
    cardArray.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-name', card.name);
        cardElement.setAttribute('data-id', card.id);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Flip card logic
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.textContent = this.getAttribute('data-name');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

// Check if two cards match
function checkForMatch() {
    if (firstCard.getAttribute('data-name') === secondCard.getAttribute('data-name')) {
        disableCards();
        matchedPairs += 1;

        if (matchedPairs === cardArray.length / 2) {
            setTimeout(() => alert('You won!'), 500);
        }
    } else {
        unflipCards();
    }
}

// Disable matched cards
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    resetBoard();
}

// Unflip cards if they don't match
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';

        resetBoard();
    }, 1000);
}

// Reset board for next turn
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Restart game
function restartGame() {
    matchedPairs = 0;
    generateBoard();
}

// Event listener for restart button
restartBtn.addEventListener('click', restartGame);

// Initialize game
generateBoard();
