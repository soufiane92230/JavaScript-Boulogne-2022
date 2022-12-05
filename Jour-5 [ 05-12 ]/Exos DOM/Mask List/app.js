

document.getElementById('btn-display').addEventListener('click', (event) => {
 
    document.querySelector('ul').classList.toggle('noOpacity') // classe qui enlève l'opacity

    if (event.target.textContent === "Mask List") {
        event.target.textContent = "Display List";
    }
    else {
        event.target.textContent = "Mask List";
    }

})