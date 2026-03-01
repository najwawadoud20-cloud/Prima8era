const jardin = document.getElementById('jardin');
const phrase = document.getElementById('phrase-accueil');
const compteur = document.getElementById('compteur');
let score = 0;
let premierClic = true;

jardin.addEventListener('click', (e) => {
if (premierClic) {
phrase.style.opacity = "0.1";
compteur.classList.remove('cache');
compteur.classList.add('visible');
premierClic = false;
}

score++;
compteur.innerText = `Pétales déposés : ${score}`;

const fleur = document.createElement('div');
fleur.className = 'fleur';

let chance = Math.random();
if (chance < 0.08) {
fleur.classList.add('fleur-speciale');
} else if (chance < 0.24) {
fleur.classList.add('fleur-rare');
} else {
fleur.classList.add('fleur-commune');
}

const rotation = Math.random() * 360;
fleur.style.setProperty('--r', `${rotation}deg`);

fleur.style.left = (e.clientX - 9) + 'px';
fleur.style.top = (e.clientY - 9) + 'px';

jardin.appendChild(fleur);
});
