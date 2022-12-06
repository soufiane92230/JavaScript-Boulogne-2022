
document.querySelector('.btn-add').addEventListener('click', function() {

    // on récupère la valeur saisie dans l'input
    let newTask = document.getElementById('task').value;

    // on crée une checkbox et un label en y ajoutant la valeur de l'input
    document.querySelector('.todo-list').innerHTML += `
        <div class="checkbox-container">
            <input type="checkbox" id="${newTask}">
            <label for="${newTask}">${newTask}</label>
        </div>
    `

    // on vide l'input
    document.getElementById('task').value = '';

    // on exécute la fonction qui vérifie si des checkbox sont cochées
    isChecked();

})


// cette fonction doit être exécutée au moment de la création des checkbox dans l'eventListener
// si la fonction était exécutée au début du code, aucune checkbox n'existerait encore à ce moment-là

function isChecked() {

    let boxes = document.querySelectorAll('input[type="checkbox"]');
    
    for (let box of boxes) {
        box.onclick = event => {  
            // on cible le label avec le for correspondant à l'id de la checkbox cochée 
            document.querySelector(`[for="${event.target.id}"]`).classList.toggle('crossed');
            
            // on ajoute ou enlève l'attribut checked 
            // pour qu'au moment de mettre à jour le contenu HTML des checkboxes, celles qui on été cochées restent cochées
            document.querySelector(`#${event.target.id}`).toggleAttribute('checked');
        }
    }
}
