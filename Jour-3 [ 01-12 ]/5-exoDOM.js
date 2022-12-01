
/*
CREER UNE PAGE HTML AVEC UN H1 VIDE
CREER UNE FONCTION QUI AFFICHE UN PROMPT DEMANDANT UN PRENOM
CETTE FONCTION AFFICHE LE TEXTE 'BONJOUR + PRENOM' DANS LE H1
*/

// VERSION 1
function displayName (msg) {
    // const getText = prompt(msg);
    // document.querySelector('h1').textContent = getText;
    document.querySelector('h1').textContent = prompt(msg);
}

displayName('quel est votre nom ?');

// VERSION 2
function displayName() {
    // let userName = prompt('Quel est votre nom ?');
    // let title = document.querySelector('h1');
    // return title.textContent = `Bonjour ${userName}`;
    document.querySelector('h1').textContent = `Bonjour ${prompt('Quel est votre nom ?')}`;
}

displayName();



// VERSION 3
const insertName = name => document.querySelector('h1').textContent = `Bonjour ${name}`;

insertName(prompt('Quel est votre nom ?'));