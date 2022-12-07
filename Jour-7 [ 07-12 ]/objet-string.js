

let myString = 'myString';

myString.length; // nombre de caractères : 8


// les chaines de carctères sont itérables

for (let letter of myString) {
    console.log(letter); //  --> 'm' 'y' 'S'...
}

myString[0]; // --> m


// includes() pour chercher une chaîne de caractères à l'intérieur d'une chaîne de carctères

myString.includes('my');  // --> true
myString.includes('Z');  // --> false

// on peut fournir une 2ème paramètre : à partir de quel index (inclus) faire la recherche
myString.includes('y', 1);  // --> true
myString.includes('y', 2);  // --> false


// indexOf() pour trouver l'index d'une string

let mystrings = 'mystrings'
mystrings.indexOf('s');  // --> 2 (index du premier élément trouvé)

// on peut fournir une 2ème paramètre : à partir de quel index (inclus) faire la recherche 
'freedom'.indexOf('d'); // -->  4
'freedom'.indexOf('d', 3); // --> 4  (l'index du 'd' ne change pas) 

'coconut'.indexOf('o'); // --> 1
'coconut'.indexOf('o', 2); // --> 3

'coconut'.indexOf('z'); // --> -1


// toLowerCase()  -  toUpperCase()

'MIMIMIZE'.toLowerCase(); // --> 'minimize'
'minimize'.toUpperCase(); // --> 'MIMIMIZE'


// slice() permet d'extraire une partie de la string
// la string originale est conservée

// slice(startIndex, endIndex) endIndex is excluded

'JavaScript is awesome'.slice(4, 10); // -->  'Script'

'JavaScript is awesome'.slice(4); // --> 'Script is awesome'

'JavaScript is awesome'.slice(-10); // --> 'Script is awesome'

let strClone = 'JavaScript is awesome'.slice();


// ON PEUT CHAINER LES METHODES

'Document Object Model'.slice(9, 15).toUpperCase(); // --> 'OBJECT'

// replace(before, after)
'coding is hard'.replace('hard', 'cool'); // --> 'coding is cool'

// ne remplace que la première occurence
'coding is hard, very hard'.replace('hard', 'cool'); // --> 'coding is cool, very hard';








