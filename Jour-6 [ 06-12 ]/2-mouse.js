// https://www.w3schools.com/jsref/obj_mouseevent.asp


/*

click  |  dblclick

mousedown  |  mouseup

mouseenter  (se déclenche aussi sur les enfants) |  mouseover (se déclenche que sur le parent)
mouseleave  (se déclenche aussi sur les enfants) |  mouseout  (se déclenche que sur le parent)

mousemove

 */


// window.addEventListener('click', function(event) {
//     console.log(event); 
//     // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// })

// window.addEventListener('mousemove', function(event) {
//     console.log(event); 
//     // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// })


/*

1 - capter le mouvement de la souris : créer un cercle qui se déplace sur l'écran en suivant le curseur

2 - écrire sur l'écran avec le curseur

3 - au click afficher un cercle plus grand à l'endroit du click

*/

// un rond de couleur suit le curseur
function mouseMove(event) {
    document.querySelector('.mouseMove').style.left = event.clientX + 'px';
    document.querySelector('.mouseMove').style.top = event.clientY + 'px';
}

// un rond de couleur est ajoutée au DOM à chaque déplacement de la souris
function mouseWrite(event) {
    const pixel = document.createElement('div');
    pixel.classList.add('mouseWrite');
    document.body.append(pixel);
    pixel.style.left = event.clientX + 'px';
    pixel.style.top = event.clientY + 'px';
}

// un rond d'une autre couleur est ajouté au DOM 
function mouseStamp(event) {
    const stamp = document.createElement('div');
    stamp.classList.add('mouseStamp');
    document.body.append(stamp);
    stamp.style.left = event.clientX + 'px';
    stamp.style.top = event.clientY + 'px';
}

// 2 fonctions exécutées au déplacement de la souris
window.addEventListener('mousemove', function(event) {
    mouseMove(event);
    mouseWrite(event);
});

// une fonction exéutée au click
window.addEventListener('click', function(event) {
    mouseStamp(event);
});

