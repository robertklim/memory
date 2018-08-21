const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlipped) {
        // first click
        hasFlipped = true;
        firstCard = this;
    } else {
        // second click
        hasFlipped = false;
        secondCard = this;

        // check if cards match
        if (firstCard.dataset.card === secondCard.dataset.card) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));