

['javascript', 'react', 'python'].length; // 3


// pop() supprime le dernier élément d'un tableau

['javascript', 'react', 'python'].pop(); // renvoie l'élément supprimé : 'python'
// nouveau tableau : ['javascript', 'react']



// push() ajoute un ou plusieurs éléments à la fin du tableau

['javascript', 'react', 'python'].push('css', 'sass'); // renvoie la nouvelle taille (5)
// nouveau tableau : ['javascript', 'react', 'python', 'css', 'sass'];



// shift() supprime le premier élément du tableau 

['javascript', 'react', 'python'].shift();  // renvoie l'élément supprimé
// nouveau tableau : ['react', 'python']


// unshift ajoute un ou plusieurs éléments au début du tableau

['javascript', 'react', 'python'].unshift('css', 'sass'); // renvoie la nouvelle taille (5)
// nouveau tableau : ['css', 'sass', 'javascript', 'react', 'python']; 



// includes() pour chercher si un élément est dans un tableau 

['🍌', '🍈', '🍓'].includes('🍈'); // true
['🍌', '🍈', '🍓'].includes('🚀');  // false

// on peut ajouter un index à partir duquel commencer la recherche
['🍌', '🍈', '🍓'].includes('🍈', 2);  // false



// indexOf() pour connaître l'index d'un élément 

['🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝'].indexOf('🍉'); //  3

// on peut ajouter un index à partir duquel commencer la recherche
['🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝'].indexOf('🍉', 2); //  3
['🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝'].indexOf('🍉', 4); //  -1


// slice() pour prélever une partie du tableau 
// sans changer le tableau d'origine

// paramètre 1 : inclus
// paramètre 2 : exclus

['🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝'].slice(1, 3);
// -->  ['🍈', '🍓'];

let fruits = ['🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝'];

let fruitsClone = fruits.slice();
let fruitsClone2 = [...fruits];


/*
splice() pour prélever une partie du tableau
le tableau d'origine est modifié

- paramètre 1 : l'index de départ
- paramètre 2 : nombre d'éléments à enlever 
    (si pas d'élément à enlever : 0)
- paramètre 3 : éléments à ajouter 
    (absent si pas d'élément à ajouter)
*/


let myArray = ['🌵', '🌴', '🍀', '🌻', '🌼'];

myArray.splice(2, 0, '🍓', '🍌'); 
// --> ['🌵', '🌴', '🍓', '🍌','🍀', '🌻', '🌼']

myArray.splice(2, 0, ...['🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝']); 
// --> ['🌵', '🌴', '🍌', '🍈', '🍓', '🍉', '🍇', '🥥', '🥝', '🍓', '🍌', '🍀', '🌻', '🌼']

myArray.splice(0, 3); 
// --> ['🍈', '🍓', '🍉', '🍇', '🥥', '🥝', '🍓', '🍌', '🍀', '🌻', '🌼']


// join(separateur) pour transformer un array en string

['Barcelona', 'Agadir', 'Toronto'].join();
// --> 'Barcelona,Agadir,Toronto'

['Barcelona', 'Agadir', 'Toronto'].join('');
// --> 'BarcelonaAgadirToronto'

['Barcelona', 'Agadir', 'Toronto'].join('-');
// --> 'Barcelona-Agadir-Toronto'