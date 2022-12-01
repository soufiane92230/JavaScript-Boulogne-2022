
// les  variables permettent de stocker des données

// mots-clés pour créer une variable : var let const

// var = ancienne syntaxe (déconseillé)
// let = nouvelle syntaxe ES6


// création de la variable
let myVariable;  

// assignation d'une valeur à la variable
myVariable = 'valeur de la variable';  

// les deux opérations en une seule ligne
let myVariable2 = 'nouvelle variable';  

// déclarer plusieurs variables en même temps
let myVariable3, myVariable4, myVariable5 = 'valeur de myvariable5';

// const pour une variable dont la valeur ne peut pas être changée
const PI = 3.14116;
// PI = 25;  ❌ INTERDIT

/* 
REGLES POUR NOMMER UNE VARIABLE:

❌ pas de mots-clés du langage JS
❌ pas de caractères spéciaux, excepté _ et $ 
❌ ne doit pas commencer par un chiffre
❌ ne doit pas contenir d'espace

✅ le nom choisi doit être le plus significatif possible

*/

// types d'écritures des variables :

// camelCase
let newUserLastName;

// snake_case
let new_user_first_name;



// les différents types de valeurs stockables dans une variable //

/*
string
number
boolean
object 
function
undefined
null
symbol
*/

// ................................................... //
// ........ type string (chaîne de caractères) ........ // 
// ................................................... //

// tout ce qui est entre des guillemets est considéré comme un string (même des nombres)

let str = 'chaîne de caractères';
let str2 = "autre chaîne de caractères";
let strNumb = '36';
let quoteMakeString = '45 / 5 * 8';

// pour pouvoir utiliser des guillemets dans une string, il faut placer un \ avant
let str3 = 'je m\'appelle Philippe etj\'ai 30ans';


// ... concatenation ... //
// mettre bout a bout des chaînes de caractères avec le symbole +

let firstName = 'Filip';
let lastName = 'Lanougadere';

console.log(firstName + ' a ' + 36 + ' ans');  // 'Filip a 36 ans'
let greetings = 'je m\'appelle ' + firstName + ' ' + lastName;
// 'je m'appelle Filip Lanougadere'

// le + transforme les nombres en chaînes de caractères si une string se trouve avant ou après
let passWord = 45 + 'xxx' + 12;  // '45xxx12'



// ... template strings avec les backtiks `` (alt gr + 7) ... //

// on place les variables entre les symboles ${} 
let greetings2 = `je m'appelle ${firstName} ${lastName}`;


// ................................................... //
// ............... type number ..................... // 
// ................................................... //

let number = 45 + 78 * 45;  // 3555
let decimalNumber = 1.75;  // avec un point à la place de la virgule

let number2 = 14 * 4 + 6;  // 62
let number3 = 14 * (4 + 6);  // (mêmes régles de priorités qu'en Math)

let count = 1;


// ... syntaxe raccourci pour combiner une assignation et un calcul ... //

count = count + 10;  // 11
count += 10;  // 21

count -= 10;  // 11
count *= 4;  // 44 


// ... INCREMENTATION (ajout de 1) ... //

count = count + 1; // 45
count++; // 46

console.log(count++);  //  46
console.log(count);  //  47

console.log(++count);  // 48
console.log(count);   // 48 

count--; // 47
--count; //46

// ... NaN (Not a Number) ... //

/* 
mathématiquement pas valide
(si on essaie de faire une opération mathématique entre des nombres et autre chose que des nombres)
s'il le peut, JavaScript tente de convertir les valeurs pour pouvoir réaliser l'opération demandée 
*/

let nan = 'str' * 2;  // NaN   --> opération impossible
let notNan = '42' * 2;  // 84   --> '42' converti en number
let notNan2 = '42' + 2;  // '422'  --> 2 converti en string


// ................................................... //
// ............... type boolean ..................... // 
// ................................................... //

// uniquement 2 valeurs possibles : true ou false (sans guillemets)

let isUserLogged = true;

/*
en JavaScript, tout est évalué true sauf certaines valeurs 

valeurs évaluées false :
undefined - false - NaN - Null - 0 (zéro) -  '' (string vide)


// ................................................... //
// ............... type undefined ..................... // 
// ................................................... //

/* 
une variable est créée mais pas de valeur lui est assignée

🛑 différent de 'is not defined' (la variable n'existe pas)

undefined : type de valeur
is not defined : erreur
*/

// ................................................... //
// ............... type object ..................... // 
// ................................................... //

let arr = ['str', 45, true, function(){}, [1, 2, 3]];

typeof arr;  //  object

arr.length; // 5  (nombre d'éléments d'un tableau en partant de 1)

arr[0]; // --> 'str'   (1er élément du tableau : à l'index 0)

// --> l'index du dernier élément d'un tableau est toujours length-1

arr[4][1];  //  --> 2 (2eme élément du 3ème élément)
arr[arr.length - 1][1]; // --> 2 (2eme élément de l'avant-dernier élément)


let user = {
    firstName: 'Ali',
    age: 25,
    dev: true
}

typeof user; // object

user.firstName; // 'Ali'


