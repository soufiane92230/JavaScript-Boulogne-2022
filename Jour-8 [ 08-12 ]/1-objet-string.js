
// replace(before, after)
'coding is hard'.replace('hard', 'cool'); // --> 'coding is cool'

// ne remplace que la première occurrence
'coding is hard, very hard'.replace('hard', 'cool'); // --> 'coding is cool, very hard';

// replaceAll() pour remplacer toutes les occurrences 
'Mr BLUE has a blue hat and a blue car'.replaceAll('blue', 'red'); // --> 'Mr BLUE has a red hat and a red car'

'avoid-kebab-case'.replaceAll('-', ' '); // -->  'avoid kebab case'


// possibiité d'utiliser des regex pour affiner les possibilités de changements

'Mr BLUE has a blue hat and a blue car'.replace(/blue/gi, 'red'); // --> 'Mr red has a red hat and a red car'
// dans la regex : recherche du mot 'blue'
// g : global (toutes les occurrences)
// i : insensitive (ne s'occupe plus des majuscules ou minuscules)


// split(separateur)
// JavaScript va couper la string à chaque endroit où il va trouver le séparateur

'javascript'.split(); // --> ['javascript']
'javascript'.split('s'); // --> ['java', 'cript']
'javascript'.split(''); // --> ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']


'coding is very very cool'.split(' ');  //  --> ['coding', 'is', 'very', 'very', 'cool']




