const emojis = [
  '😺',
  '😺',
  '🐶',
  '🐶',
  '🐯',
  '🐯',
  '🐷',
  '🐷',
  '🦄',
  '🦄',
  '🐬',
  '🐬',
  '🦝',
  '🦝',
  '🐮',
  '🐮',
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector('.game').appendChild(box);
}
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add('boxOpen');
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }
  openCards = [];
  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    document.querySelector('.parabens-container').style.display = 'flex';
    launchConfetti();
  }
}
function launchConfetti() {
  const container = document.querySelector('.confetti-container');
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // posição inicial
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';

    // cor aleatória
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // duração aleatória
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';

    container.appendChild(confetti);

    // remover confete depois que cair
    setTimeout(() => confetti.remove(), 5000);
  }
}
