const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;

    this.classList.toggle('flip');

    if (!hasFlipped) {
        // first click
        hasFlipped = true;
        firstCard = this;

        return;
    }

    // second click
    hasFlipped = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    isMatch ? disableCards() : unflipCards();

}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;

    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));