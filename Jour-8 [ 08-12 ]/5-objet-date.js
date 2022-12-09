Date(); 
// --> 'Thu Dec 08 2022 14:07:43 GMT+0100 (heure normale d’Europe centrale)'

let today = new Date(); // --> objet


today.getFullYear(); // 2022
today.getMonth();  // 11 (december) (january == 0)
today.getDay();  //  4 (thursday)  (sunday == 0)


// toLocaleDateString()

today.toLocaleDateString();  // --> '08/12/2022'

// avec 2 paramètres : la langue, un objet d'options

let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

today.toLocaleDateString('fr', options); // --> 'jeudi 8 décembre 2022'
