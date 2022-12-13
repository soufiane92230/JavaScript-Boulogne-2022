/* 

Demander via deux inputs un nombre minimum et un nombre maximum
- Générer via un bouton un nombre aléatoire entre ces deux nombres
- Le nombre généré doit être deviné via un troisième input
- Tant que le nombre n'est pas trouvé, afficher un message sous cet input précisant si le
chiffre donné est trop petit ou trop grand
- Afficher un message de félicitations sous l'input quand le nombre est trouvé
- Préciser dans le message de félicitations en combien d'essais le nombre a été trouvé

*/

let magicNumber = 0;
let tries = 0;

let getRandomNumb = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

document.getElementById('btnGenerate').onclick = () => {

    document.getElementById('result').textContent = '';
    document.getElementById('userNb').value = null;
    tries = 0;
    let min = Number(document.getElementById('minNb').value);
    let max = Number(document.getElementById('maxNb').value);
    magicNumber = getRandomNumb(min, max);
    console.log(magicNumber);
};

btnGuess.addEventListener('click', () => {

    let userNumber = Number(document.getElementById('userNb').value);
    tries++;

    if (userNumber === magicNumber) {
        document.getElementById('result').textContent = `Yeah ! that\'s it ! You needed ${tries} 
        ${tries > 1 ? 'tries' : 'try' } `;
    }
    else if (userNumber < magicNumber) {
        document.getElementById('result').textContent = 'Too small... try again';
    }
    else {
        document.getElementById('result').textContent = 'Too big... try again';        
    }
})


