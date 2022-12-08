// ..... input - change ..... //

// l'événement input est déclenché lors de  la saisie d'une information dans un champ de formulaire (input - textarea - select)
// l'événement input est déclenché au fur et à mesure de la saisie

// l'événement change est déclenché lors d'un changement d'état (select choisi, perte de focus) 

document.getElementById('textInput').addEventListener('input', function(event){
    console.log(event.target.value);
})

document.getElementById('colorInput').addEventListener('input', function(event){
    console.log(event.target.value);
    document.body.style.background = event.target.value; // 😎
})

document.getElementById('selectInput').addEventListener('input', function(event){
    console.log(event.target.value);
})


// ..... submit ..... //

// l'événement submit est déclenché lors de la soumission d'un formulaire 
// il faut ABSOLUMENT ajouter la méthode event.preventDefault() pour empêcher la page de se recharger au moment de la soumission du formulaire (comportement par défaut)

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Submit Event depuis le formulaire');
})

// cela revient au même que l'événement click sur un bouton de type submit
document.getElementById('btnSubmit').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Submit Event depuis le bouton submit');
})
// ou que l'événement click sur un input de type submit
document.getElementById('inputSubmit').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Submit Event depuis l\'input submit');
})


// // l'événement reset est déclenché lors du click sur un reset 
// document.querySelector('form').addEventListener('reset', function(){
//     console.log('Reset Event depuis le formulaire');
// })


// // cela revient au même que l'événement click sur le bouton de type reset
document.getElementById('btnReset').addEventListener('click', function(){
    console.log('Reset Event depuis le bouton reset');
})
// // ou que l'événement click sur un input de type reset
document.getElementById('inputReset').addEventListener('click', function(){
    console.log('Reset Event depuis l\'input reset');
})
