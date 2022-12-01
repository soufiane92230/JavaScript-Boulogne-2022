
/* 
le rôle d'une fonction est de renvoyer un résultat 
on utilise le mot clé return
on peut alors stocker ce résultat dans une fonction
*/

function addNumb(numb1, numb2) {
    console.log(numb1 + numb2);
    return numb1 + numb2;
}

let result = addNumb(4, 5);  // on stocke dans la variable result la somme de 4 et 5;


// l'instruction return met fin à la fonction 

function sayHi() {
    return 'hi';
    console.log('hi');  // ne sera pas exécuté
}

/*
la fonction prompt affiche une popup pour poser une question et récupérer la valeur saisie
(cette fonction renvoie ce qui sera saisi dans l'input affiché)
*/

// let userName = prompt('comment vous appelez vous?');

// les valeurs récupérées d'un prompt sont de type string

let numbString = '4';

// comment transformer une string en number
numbString * 1;
numbString - 0;
+numbString;




