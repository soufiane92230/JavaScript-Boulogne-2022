
// Document Object Model
// le DOM est la représentation du document HTML par le navigateur

// accéder à des éléments HTML //

// querySelector() : on lui passe en paramètre un sélecteur CSS
// cible le premier élément correspondant à la sélection

document.querySelector('h1'); // --> <h1>....</h1>
document.querySelector('a'); // --> premier élément <a>....</a>

document.querySelector('footer ul a');  //  --> premier <a> du <footer>

document.getElementById('navlist'); //  --> null (n'existe pas)
document.getElementById('topOfPage'); // -->  <h1 id="topOfPage">
document.querySelector('#topOfPage'); // -->  <h1 id="topOfPage">


/*
toutes les méthodes de recherche d'éléments s'effectuent par défaut à partir du document 
mais elles peuvent être utilisées que sur une partie du document
*/

let main = document.querySelector('main');  
main.querySelector('a');  // 1er <a> dans le <main>


// querySelectorAll()

document.querySelectorAll('a');  // liste de tous les liens de la page
// --> NodeList(9) [a, a, a, a, a, a, a, a, a]


// getElementsByClassName()
document.getElementsByClassName('network'); 
// liste de tous les éléments avec la classe 'network'
// --> HTMLCollection(4) [li.network, li.network, li.network, li.network]


// .. accéder au contenu d'un élément  .. // 

// accéder au texte
let h1 = document.querySelector('h1');  
h1.textContent; // texte du titre <h1>

// accéder au contenu HTML
let firstLi = document.querySelector('li');
firstLi.innerHTML; // --> '<a href="">lien dans header</a>'