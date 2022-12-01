/*

opérateur d'assignement : =  (assigner une valuer à une variable)

opérateur de concaténation : +  (mettre bout à bout des strings)

opérateurs arithmétiques :  
+  -  /  *   ** (pow)   % (modulo : pour savoir si un nombre est un multiple)  

opérateurs raccourcis : +=  *=  /=  -=

*/


let name1 = 'Pierre';

name1 += '-Henri';  // 'Pierre-Henri'


// ...   opérateurs de comparaison :  >  >=  <  <=  ==  ===  !=  !==    ... // 

4 < 10;  // true 
4 < '10';  // true   (JS convertit les types pour pouvoir comparer les valeurs)
4 < 'ten';  // false  (comparaison impossible --> false)


// ...   vérifier l'égalité entre 2 valeurs : ==   ...//  
// vérifie si les valeurs sont égales (JS va convertir les types si besoin)

4 == 4;  // true 
4 == '4';  // true;


// ... vérifier l'égalité stricte (si le type ET la valeur sont égaux)  ... //
4 === '4';  // false;


// ...   donner le contraire : !   ... //
let isUserLogged = true;

!isUserLogged   // isUserLogged === false



// ...  vérifier l'inégalité en valeur : !=   .. //

'2' != 2; // false  (conversion des valeurs --> 2 != 2)
2 != 2;  // false

// ...  vérifier la stricte inégalité en type et en valeur : !==   ... //
'2' !== 2; // true
2 !== 2;  // false


// ...  les opérateurs logiques :  && (and) - || (or)  ... //

// ...  || --> AU MOINS UNE des propositions doit être true   ... //

// différents choix proposés à l'utilisateurs : 😣 😒 🤮  😍  🙂

let userMood = '🤮';

userMood === '😣' || userMood === '😒' || userMood === '🤮';  // --> true

let userMood2 = '😍';

userMood === '😣' || userMood === '😒' || userMood === '🤮';  // -->  false


// prévoir une valeur par défaut

let userName = userName || 'John Doe';
/*
si aucun nom saisi --> '' (string vide --> false)
JS va devoir vérifier si la 2ème valeur est true
c'est 2eme valeur qui sera utilisée  (string pleine --> true)

si un nom est saisi --> 'Max' (-->true), c'est cette valeur qui sera utilisée
*/

//...  && --> TOUTES les propositions doivent être true   ... //

isMember && newsLetter.checked; // l'utilisateur doit être membre ET avoir coché la case newsletter


