

let buttons = document.querySelectorAll('button:not(.btn-reset)');
let para = document.querySelector('p');


// on parcourt la liste de boutons avec une boucle pour placer un "écouteur de click" su chacun de boutons

buttons.forEach(btn => {
    btn.addEventListener('click', function() {

        // on récupère le style du bouton cliqué pour l'appliquer au paragraphe
        para.style.background = getComputedStyle(btn).backgroundColor;
        para.style.color = getComputedStyle(btn).color;

    })
})

document.querySelector('.btn-reset').addEventListener('click', function() {
    para.removeAttribute('style');  // on supprime l'attribut style qui contient les déclarations CSS faites depuis le script
})