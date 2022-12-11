

// .... map()  ... //
// fait un boucle sur un tableau pour réaliser la même action sur tous les éléments du tableau
// renvoie un tableau avec les éléments modifiés

let names = ['Kevin', 'Pierre-HenrI', 'Sami'];

let upperNames = names.map(item => item.toUpperCase());  // --> ['KEVIN', 'PIERRE-HENRI', 'SAMI']


// ... filter() ... //
// fait un boucle sur un tableau pour vérifier une condition sur chaque élément du tableau
// renvoie un tableau avec les éléments qui remplissent la condition

// depuis le tableau names recupérer un tableau avec uniquement les noms se terminant par i, en majuscules 

let namesEndedWithI = names.filter( item => item.slice(-1) === 'i' || item.slice(-1) === 'I' )
                            .map( item => item.toUpperCase());

// --> ['PIERRE-HENRI', 'SAMI'];


// ... some() ... //
// fait un boucle sur un tableau pour vérifier une condition sur chaque élément du tableau
// renvoie un booléen : true si au moins un élément du tableau rempli la condition

let caracters = ['Mario', 'Luigi', 'Bowser', 'Donkey Kong', 'Peach', 'Yoshi'];

let someWithA = caracters.some(item => item.includes('a') ) // --> true


// ... every() ... //
// fait un boucle sur un tableau pour vérifier une condition sur chaque élément du tableau
// renvoie un booléen : true si tous les éléments du tableau remplissent la condition

let allWithA = caracters.every(item => item.includes('a') ) // --> false


// ... sort() ... //
// pour trier les éléments d'un tableau 
// MODIFIE LE TABLEAU D'ORIGINE

[1, 8, 4, 2, 9, 3].sort();  // -->  [1, 2, 3, 4, 8, 9]

[1, 80, 40, 12, 8, 4].sort();  // 

// tri ascendant
[1, 80, 40, 12, 8, 4].sort( (a, b) => a - b );  // [1, 4, 8, 12, 40, 80]

// tri descendant
[1, 80, 40, 12, 8, 4].sort( (a, b) => b - a );  // [80, 40, 12, 8, 4, 1]


['pomme', 'banane', 'poire', 'mangue'].sort();  //   ['banane', 'mangue', 'poire', 'pomme']

['POMME', 'banane', 'POIRE', 'mangue'].sort();  //   ['POIRE', 'POMME', 'banane', 'mangue']

// tri ascendant
['POMME', 'banane', 'POIRE', 'mangue'].sort( (a, b) => a.localeCompare(b) );  // ['banane', 'mangue', 'POIRE', 'POMME']

// tri descendant
['POMME', 'banane', 'POIRE', 'mangue'].sort( (a, b) => b.localeCompare(a) );  // ['POMME', 'POIRE', 'mangue', 'banane']



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


// ... reduce() ... //
// pour récupérer le résultat final d'une série d'opérations sur les différents éléments d'un TABLEAU

/*
la fonction callback passée en argument de reduce() prend 2 arguements :
    - argument 1 : accumulateur (par défaut, c'est le 1er élément du tableau)
    - argument 2 : current (élément exécuté à chaque tour de boucle)
                    (par défaut au 1er tour de boucle, c'est le 2ème élément du tableau)
*/ 

[1, 80, 40, 12, 8, 4].reduce( (acc, curr) => acc + curr );  // 145
// 1er tour de boucle : acc = 1 + 80
// 2ème tour de boucle : acc = acc + 40 ...

[1, 80, 40, 12, 8, 4].reduce( (acc, curr) => acc * curr );  // 1228800


// -- on peut appeler une fonction définie avant -- //

const divideReducer = (acc, curr) => acc / curr;

[1, 80, 40, 12, 8, 4].reduce(divideReducer);  //  8.138020833333334e-7


// -- on peut donner une autre valeur par défaut à l'accumulateur -- //
// du coup, la valeur de current au 1er tour de boucle sera le 1er élément du tableau


[1, 80, 40, 12, 8, 4].reduce( (acc, curr) => acc + curr, 1000 );  //  1145
// 1er tour de boucle : acc = 1000 + 1
// 2ème tour de boucle : acc = acc + 80
