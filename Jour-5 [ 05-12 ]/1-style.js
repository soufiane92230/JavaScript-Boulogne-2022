

let h1 = document.querySelector('h1');

// on déclare le style en JS avec la propriété style qui donne accès à l'objet CSSStyleDeclaration qui possède toutes les propriétés CSS écrites en camelCase

h1.style.backgroundColor = '#272727';


// ATTENTION cet objet ne donne que les déclarations CSS faites en JavaScript

h1.style.color; // --> ''  (déclaré dans notre fichier CSS)
h1.style.margin; // --> '' (déclaré dans le CSS du navigateur)

// getComputedStyle(element) permet d'accéder à TOUTES les déclarations CSS (feuilles de style + javascript)
getComputedStyle(h1).color; // --> 'rgb(178, 34, 34)'
getComputedStyle(h1).margin; // -->  ''21.44px 0px'
getComputedStyle(h1).backgroundColor; // -->'rgb(39, 39, 39)'


// Idéalement, on déclare le style dans une classe en CSS et on ajoute cette classe en JS

