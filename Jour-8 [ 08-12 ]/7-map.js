
/*
map() permet de faire une boucle sur un tableau 
+ réaliser la même action sur chaque élément du tableau
+ remplir un nouveau tableau avec les éléments modifiés 

map() renvoie le nouveau tableau
*/


let names = ['Sylvain', 'Sisalio', 'Ali', 'Kamel', 'Nicolas'];


/* ..... sans map() .....  */

let upperNames = [];

for (let name of names) {
    upperNames.push(name.toUpperCase())
}

/* ..... avec map() .....  */

let upperNames2 = names.map(item => item.toUpperCase());

// --> ['SYLVAIN', 'SISALIO', 'ALI', 'KAMEL', 'NICOLAS']


// le return ici est sous-entendu (dans une fonction fléchée)
// --> si plusieurs lignes d'instructions
// --> il faudra préciser quoi renvoyer

/*
filter() permet de choisir quels éléments garder (selon une condition donnée)

myArray.filter( item => condition )

--> si la condition est remplie par l'élément, l'élément sera ajouté au nouveau tableau 

CREER UN NOUVEAU TABLEAU AVEC JUSTE LES NOMS QUI CONTIENNENT LA LETTRE 'O'

*/


/* ..... sans filter() .....  */

let justONames = [];

for (let name of names) {

    if (name.includes('o')) {
        justONames.push(name);
    }

}


/* ..... avec filter() .....  */

let justONames2 = names.filter( item => item.includes('o'));

// on peut chaîner les méthodes 

let justOupperNames = names.filter( item => item.includes('o') && item[0] == 'S')
                            .map( item => item.toUpperCase());

