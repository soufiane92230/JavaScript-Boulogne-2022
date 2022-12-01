

// les fontions fléchées sont une syntaxe ES6

// on n'écrit plus le mot-clé function

const myArrowFunction = () => {
    console.log('blabla');
}

myArrowFunction();

// si la fonction ne contient qu'une seule instruction, on peut enlever les accolades
// et tout mettre sur la même ligne

const myArrowFunction2 = () => console.log('blabla');


// si la seule instruction de la fonction est un return, on enlève les accolades et le return 

const multNumb = (numb1, numb2) => numb1 * numb2;

// si la fonction comporte un seul argument, on peut enlever les parentèses

const powNumb = numb => numb**4;

/*
CREER UNE FONCTION QUI PREND 2 NOMBRES EN PARAMETRES ET QUI RENVOIE TRUE SI LA SOMME DES DEUX EST INFERIEURE A 100
ET QUI RENVOIE FALSE SI LA SOMME EST SUPERIEURE A 100
*/

// const isLessThan100 = (nb1, nb2) => {
//     if (nb1 + nb2 < 100) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// en demandant à JS de préciser si la comparaison est true ou false, 
// on lui demande de faire quelquechose qu'il fera de toute façon
// quand on soumet une comparaison à JS, il répond par true ou false

// on demande à JS de nous renvoyer ce qu'il pense de la comparaison

const isLessThan100 = (nb1, nb2) => nb1 + nb2 < 100;
