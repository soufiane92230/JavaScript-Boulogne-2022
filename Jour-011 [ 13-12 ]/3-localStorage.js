
// Local Storage dans l'onglet Application de l'inspecteur du navigateur


// STOCKER UNE DONNE SIMPLE
localStorage.setItem('data1', 'data1 value');

localStorage.data2 = 'data2 value';


// RECUPERER UNE DONNE

let data1fromStorage = localStorage.getItem('data1');

// STOCKER UN OBJET 

const user = {
    name: 'Bob',
    age: 30
}
localStorage.user1 = user;   // NE MARCHE PAS

localStorage.user1 = JSON.stringify(user);  // TRANSFORME EN LANGAGE JSON


// RECUPERER UN OBJET 

console.log(localStorage.user1);
console.log(JSON.parse(localStorage.user1));


function sayHello() {
    
    let userLogged = localStorage.getItem('userName');
    
    if (!userLogged) {
        document.querySelector('h2').textContent = 'Please give me your name';
        console.log(userLogged);
    }
    else {
        document.querySelector('h2').textContent = `Hello ${userLogged}`;
        let elementsToHide = document.getElementsByClassName('hidden');
        for (let elt of elementsToHide) {
            elt.toggleAttribute('hidden')
        }

        if (localStorage.getItem('darkMode') === true) {
            document.body.classList.add('darkMode');
        }
    }
}

// STOCKER LES DONNES
document.getElementById('storeDataBtn').addEventListener('click', function() {
    localStorage.userName = document.getElementById('userName').value;
    localStorage.darkMode = document.getElementById('darkMode').checked;
})


sayHello();
