
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

// createElement() pour créer un élément HTML

let h1 = document.createElement('h1');
let para = document.createElement('p');
let div = document.createElement('div');
let h2 = document.createElement('h2');

// append() s'utilise sur un élément
// ajoute l'élément en tant que dernier enfant de l'élément ciblé
// plusieurs éléments peuvent être ajoutés à la fois, ils seront ajoutés les uns après les autres
// on peut ajouter du texte avec append()


main.append(h1);
h1.append('h1 ajouté avec append()');

para.textContent = 'para ajouté avec append()';
main.append(para, div);

// prepend() fait la même chose mais l'élément sera ajouté en tant que premier enfant d'un élément
h2.textContent = 'h2 ajouté avec prepend()'
main.prepend(h2);

// before()  --  after()

let para1 = document.createElement('p');
para1.textContent = 'para ajouté avec before()';
let para2 = document.createElement('p');
para2.textContent = 'para ajouté avec after()'

document.querySelector('span').before(para1);
document.querySelector('span').after(para2);

// insertAdjacentElement(mot-clé, newElement)
// mots-clés : beforebegin | afterbegin  | beforeend | afterend

let link1 = document.createElement('a');
link1.textContent = 'beforebegin';
let link2 = document.createElement('a');
link2.textContent = 'afterbegin';
let link3 = document.createElement('a');
link3.textContent = 'beforeend';
let link4 = document.createElement('a');
link4.textContent = 'afterend';

footer.insertAdjacentElement('beforebegin', link1);
footer.insertAdjacentElement('afterbegin', link2);
footer.insertAdjacentElement('beforeend', link3);
footer.insertAdjacentElement('afterend', link4);

// replaceChild(newChild, oldChild)  

let oldSpan = document.querySelector('span');
let newSpan = document.createElement('span');
newSpan.textContent = 'NEW LOGO SPAN';
header.replaceChild(newSpan, oldSpan);


// removeChild()

let footerPara = document.querySelector('footer p');
footer.removeChild(footerPara);


// remove() 

// document.body.remove();

