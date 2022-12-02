
let img = document.querySelector('img');

// hasAttribute() vérifie la présence d'un attribut
img.hasAttribute('title'); // --> true
img.hasAttribute('hidden');  // --> false

// attributes donne la liste des attributs d'un élément
img.attributes; //  {0: src, 1: alt, 2: title, src: src, alt: alt, title: title, length: 3}

// getAttribute() pour avoir la valeur d'un attribut
img.getAttribute('src');  // 'https://picsum.photos/400/200?grayscale'

// setAttribute()  pour modifier ou créer un attribut
img.setAttribute('title', 'nouveau contenu');
img.getAttribute('title');  // --> 'nouveau contenu'

// removeAttribute() supprimer un attribut
img.removeAttribute('alt');
img.hasAttribute('alt'); // --> false

// toggleAttribute() 
// supprime un attribut s'il est présent OU l'ajoute s'il est absent
// à utiliser sur les attributs boolean (hidden - disabled - required ...)
img.toggleAttribute('hidden');


// créer ou modifier des attributs

img.src = 'https://picsum.photos/400/200?blur';
document.querySelector('a').href = 'https://css-tricks.com/';
document.querySelector('h1').id = 'bigTitle';

// accéder / modifier des classes 

// className renvoie la valeur de l'attribut class
document.querySelector('p').className; // -->  'blogText class2 class3'

// classList renvoie un objet qui contient les classes de l'élément
// --> classList.add('newClass1', 'newClass2')
// --> classList.remove('oldClass')
// --> classList.toggle('darkMode')






