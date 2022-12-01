// la boucle forEach() permet de réaliser la même action sur tous les éléments d'un tableau
// forEach() prend en argument principal une fonction (callback) 
// cette fonction callback prend en argument chaque élément du tableau à chaque tour de boucle


let fruits = ['🥝', '🥥', '🍇','🍓', '🍊', '🍈', '🍌'];

fruits.forEach(fruit => {
    document.querySelector('ul').innerHTML += `<li>${fruit}</li>`;
    // l'opérateur += permet d'ajouter du contenu au contenu précédent
})

