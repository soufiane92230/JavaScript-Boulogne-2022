
/*
- Créer une fonction qui prend un mot en paramètre
- La fonction doit vérifier si le mot se termine par la lettre "s" (minuscule ou majuscule)
- La fonction doit renvoyer un booléen (true si le mot se termine par un "s" et false dans le cas contraire)
*/


// function checkFinalS(word) {
//     if (word.toLowerCase().slice(-1) == 's') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function checkFinalS(word) {
    return (word.toLowerCase().slice(-1) == 's');
}

// const checkFinalS = (word) => word.toLowerCase().slice(-1) == 's';

