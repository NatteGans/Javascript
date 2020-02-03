var srcArray = [];
const frontArray = document.querySelectorAll(".front-face");
const backArray = document.querySelectorAll(".back-face");
const cardArray = document.querySelectorAll(".memory-card");

var player1Score = 0;
var player2Score = 0;
var player1turn = true;

initializeGame();

function initializeGame() {
    for (let i = 0; i < 9; i++) {
        srcArray.push("img/Shf_" + (i + 1) + ".jpg");
        srcArray.push("img/Shf_" + (i + 1) + ".jpg");
    }

    srcArray.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    for (let i = 0; i < frontArray.length; i++) {
        frontArray[i].setAttribute("src", srcArray[i]);
        cardArray[i].dataset.card = srcArray[i];
    }
}

let hasFlippedCard = false;
let lockFlip = false;
let firstCard, secondCard;

function flipCard() {
    if (lockFlip) return;
    if (this == firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkCards();
}

function checkCards() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        removeCards();
        return;
    }
    player1turn = !player1turn;
    hideCards();
}

function removeCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    if (player1turn) {
        player1Score++;
    }
    else {
        player2Score++;
    }

    resetCards();
    updateScore();
}

function hideCards() {
    lockFlip = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCards();
        updateScore();
    }, 1500);
}

function resetCards() {
    [hasFlippedCard, lockFlip] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function updateScore() {
    if (player1turn) {
        document.querySelector("h1").textContent = "Turn for Player 1!";
    }

    else {
        document.querySelector("h1").textContent = "Turn for Player 2!";
    }

    document.querySelector(".player1score").textContent = "Player 1 score: " + player1Score;
    document.querySelector(".player2score").textContent = "Player 2 score: " + player2Score;
}

cardArray.forEach(card => card.addEventListener('click', flipCard));