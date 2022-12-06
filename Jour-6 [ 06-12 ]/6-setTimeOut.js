// setTimeOut permet d'exécuter des instructions après un laps de temps dédié
// 1er argument : la fonction à exécuter
// 2ème argument : le délai en millisecondes

console.log('ONE');
setTimeout(function(){
    console.log('TWO'); // sera executé après 1500ms
},1500)
console.log('THREE'); // sera exécuté en attendant que le console.log('TWO') soit exécuté


function addPara(txt){
    const para = document.createElement('p');
    para.textContent = txt;
    document.querySelector('main').append(para);
}

addPara('ONE');
setTimeout(function(){
    addPara('TWO'); // le paragraphe sera du coup ajouté en 3ème position
},1500)
addPara('THREE');


// setInterval permet d'exécuter des instructions en boucle 
// 1er argument : la fonction à exécuter
// 2ème argument : délai entre chaque exécution() en millisecondes)

setInterval(function() {
    console.log('2 seconds passed... ⏱️');
}, 2000);


// les fonctions setTimeOut() et setInterval() renvoient chacune un ID 

// la fonction clearInterval() permet de stopper une de ces fonctions en lui passant cet ID en paramètre

// on stocke l'ID dans une variable
let intervalID = setInterval(function() {
    console.log('2 seconds passed... ⏱️');
}, 2000);

 // on passe l'ID en paramètre de clearInterval()  
clearInterval(intervalID);
// --> la function setInterval() est arrêtée

// on peut combiner les deux :
// setTimeout(() => {
//     clearInterval(intervalID); 
//     console.log('function stopped after 5s');   
// }, 5000);


