
// cette fonction peut être utilisée avant sa création
sayHi();

// creation de la fonction
function sayHi() {
    console.log('Hi !');
};

// utiliser / appeler la fonction
// sayHi();
// sayHi();
// sayHi();
// sayHi();

// exemples noms de function 

/*
 
createPassword()
checkPassword()
resetPassword()

*/

const sayBye = function() {
    console.log('bye !');
}

sayBye();
sayBye();
sayBye();

 // on ne peut pas utiliser une variable avant son initialisation
// console.log(myName);   // PAS POSSIBLE

let myName = 'filip';

// au moment de la création de la fonction, on écrit les paramètres entre les parenthèses
// ce sont des variables dont la valeur sera donnée au moment d'utiliser la fonction

function addNumb(numb1, numb2) {
    console.log(numb1 + numb2);
}

addNumb(4, 10);  // 4 et 10 sont les valeurs de numb1 et numb2 (ce sont les arguments passés à la fonction)

addNumb(4, 10, 50);  // si plus d'arguments sont passés, les arguments supplémentaires seront ignorés


// rest parameter permet de récupérer l'ensemble des arguments dans un tableau

function getParams(...args) {
    console.log(args);
}

function getOddSum (...numbs) {

    let sum = 0;

    for (let numb of numbs) {
        if (numb % 2 !== 0){
            sum += numb;
        }
    }

    console.log(sum);
}


