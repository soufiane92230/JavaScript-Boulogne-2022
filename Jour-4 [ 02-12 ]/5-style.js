

/*
la propriété style permet d'accéder à l'objet CSSStyleDeclaration qui regroupe toutes les déclarations CSS (mais uniquement celles faites en JavaScript)

on n'y trouve donc pas toutes les déclarations effectuées dans des fichiers CSS styles
*/

let h1 = document.querySelector('h1');
h1.style.backgroundColor = 'grey';

h1.style.color; // --> ''  string vide
/* pourtant on a bien cette déclaration dans le fichier CSS : 
        h1 {
            color : #b22222;
        } 
*/

h1.style.backgroundColor; // --> 'grey' 
// parceque cette déclaration a été faite dans le fichier JS