// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// keyup - keydown - keypress

// l'événement est déclenchée quand la touche du clavier est relachée
window.addEventListener('keyup', function(event) {
    console.log(event.key); // --> touche du clavier
    // 🛑 event.keyCode = Deprecated
})