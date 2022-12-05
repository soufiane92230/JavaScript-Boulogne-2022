/*
la méthode addEventListener() permet d'écouter un événement à partir d'un élément HTML element
cette méthode prend 2 paramètres : 
    - l'événement en format string 
    - une fonction à exécuter (le plus souvent une fonction anonyme) au moment où l'événement se produit
*/

document.querySelector('h1').addEventListener('click', function() {
    console.log('h1 clické');

})

/*
si plusieurs logiques sont exécutées dans le addEventListener(), la bonne pratique est d'enfermer ces logiques dans des fonctions déclarées à l'extérieur du addEventListener() 
ces fonctions sont ensuites appelées dans la fonction du addEventListener()
*/

function createUserAccount() { };
function displayUserAccount() { };

document.getElementById('btn-login').addEventListener('click', function() {
    createUserAccount();
    displayUserAccount();
})


/*
si une seule fonction doit être exécutée, on y fait alors référence en 2ème argument du addEventListener() sans mettre les parenthèses (sinon elle serait exécutée directement)
*/

function oneFunction() { 
    console.log('A SIMPLE FUNCTION');
};


document.getElementById('fireOneFunction').addEventListener('click', oneFunction);


/*
le mot-clé this fait référence au contexte d'exécution d'une fonction
dans un addEventListener(), le this fera donc référence à l'élément sur lequel se passe l'événement ciblé

il est possible d'utiliser une fonction fléchée dans addEventListener()
mais le mot clé this ne marche pas dans une fonction fléchée 
*/

console.log(this);  // --> objet Window

document.getElementById('getThis').addEventListener('click', function() {     
    console.log(this);   // -->  <button id="getThis">Get This Context</button>
}); 


document.getElementById('getThis').addEventListener('click', () => {
    console.log(this);   // --> objet Window
}); 


/*
pour chaque événement est disponible un objet event avec des propriétés spécifiques à l'événement déclenché
il faut passer cet objet event en paramètre de la fonction pour pouvoir y accéder

une des propriétés de l'objet event est target qui fait référence à l'élément sur lequel se passe l'événement
*/

document.getElementById('getEventTarget').addEventListener('click', function(event) {     
    console.log(event.target);  // -->  <button id="getThis">Get This Context</button>
}); 

document.getElementById('getEventTarget').addEventListener('click', (event) => {
    console.log(event.target);  // -->  <button id="getThis">Get This Context</button>
}); 


