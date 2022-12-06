

/*
pour écouter et réagir à un événement, 
- soit on utilise un écouteur d'événement (addEventListener auquel on précise l'événment à écouter)
    --> addEventListener('click', function(){})

- soit on écoute un gestionnaire d'événement (chaque événement à son gestionnaire)
    --> onclick = function(){}
        (soit une fonction anonyme, soit on fait référence à une fonction existante)

un gestionnaire d'événement a accès ausssi à l'objet event (qu'il faudra passer en paramètre de la fonction)

*/


// la différence entre addEventListener et un gestionnaire d'événement comme onclick:
 
function checkClick() {console.log("click")};
function checkClick2() {console.log("CLICK !!")};

// on peut attacher plusieurs addEventListener écoutant un même événement à un élément 
// ici les deux fonctions seront exéutées
document.querySelector('button').addEventListener('click', checkClick);
document.querySelector('button').addEventListener('click', checkClick2);

// on ne peut attacher qu'un seul gestionnaire d'événement à un élément
// ici seule la deuxième fonction sera exécutée (la deuxième assignation à onclick remplace la première)
document.querySelector('button:nth-child(2)').onclick = checkClick;
document.querySelector('button:nth-child(2)').onclick = checkClick2;