
/*
- écrire une boucle qui affiche les chiffres de 1 à 50 dans la console

- si le chiffre est un multiple de 3, on affiche 'Fizz' à la place du chiffre
- si le chiffre est un multiple de 5, on affiche 'Buzz' à la place du chiffre
- si le chiffre est un multiple de 3 et 5, on affiche 'FizzBuzz' à la place du chiffre

*/

// ++++ VERSION 1 ++++ //

for (let i=1; i<=50; i++) {
    
    if (i%3 === 0 && i%5 === 0) {
        console.log('FizzBuzz'); 
    }
    else if (i%3 === 0){
        console.log('Fizz');
    }
    else if (i%5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}


// ++++ VERSION 2 ++++ //

for (let i=1; i<=50; i++) {

   let output = '';

   if (i%3 === 0) {
    output = 'Fizz'; 
   } 
   if (i%5 === 0) {
    output += 'Buzz'
   }
   if (!output) {
    output = i;
   }

   console.log(output);
}
    


// ++++ VERSION 3 ++++ //

for (let i=1; i<=50; i++) {

    let output = '';  // string vide vaut false

    if (!(i%3)) {  // 0 vaut false (on vérifie si le résultat vaut zéro)
        output = 'Fizz';
    }
    if (!(i%5)) {  
        output += 'Buzz';
    }

    console.log(output || i); 
    // si output = '' --> false --> on affiche i
    // si ouput contient quelquechose --> true --> on affiche output   
}


// ++ VERSION 4 🤐 ++ //

for(var i=1;i<100;i++){
    console.log(((['Fizz'][i%3] || '') + (['Buzz'][i%5] || '')) || i)
 } 

/*

['Fizz'] et ['Buzz'] sont des tableaux qui ne contiennent qu'un élément 

[i%3] et [i%5] vont donner :
- soit [0] qui correspond donc à 'Fizz' ou 'Buzz'
- soit un index qui correspond à rien et vaut donc undefined

undefined || '' --> renvoie ''

A la fin :

'Fizz' || i  --> renvoie 'Fizz'
'Buzz' || i  --> renvoie 'Buzz'
'FizzBuzz' || i  --> renvoie 'FizzBuzz'
'' || i -->  renvoie i 

*/
