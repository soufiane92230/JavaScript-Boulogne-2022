/*

- un prompt demandant combien d'articles on souhaite créer

- créer une fonction qui prend le nombre donné en paramètre
et crée le nombre d'articles voulus dans le <main></main>

- chaque article comporte un titre, un paragraphe et une image 

- ajouter le style via une classe CSS

*/

let paraNumb = +prompt('How many articles do you want ?');

for (let i = 1; i <= paraNumb; i++) {
    createArticle(i)
}

function createArticle(nb) {
    let article = document.createElement('article');
    article.classList.add('blogArticle');

    article.innerHTML = `
        <h2>Article N°${nb}</h2>
        <img src="https://picsum.photos/400/200?grayscale&random=${nb}" alt="image random">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi laborum ab fugiat labore ratione quis deserunt, alias quos eveniet voluptate asperiores minima. Deleniti, accusantium sint quidem voluptatem cum quisquam adipisci hic fugit alias, rem ipsum aliquam, dignissimos numquam repellat?</p>
    `
    document.querySelector('main').append(article);
}


// VERSION LONGUE //

// function createArticle(nb) {
//     let article = document.createElement('article');
//     article.classList.add('blogArticle');
    
//     let title = document.createElement('h2');
//     title.textContent = `Article N° ${nb}`;

//     let img = document.createElement('img');
//     img.src =`https://picsum.photos/400/200?grayscale&random=${nb}`;
//     img.alt = 'image random';

//     let para = document.createElement('p');
//     para.textContent = 'stand bigger teeth complete cake anything easier per dull tape settlers become applied size some stock happily completely myself crack health every solve offer';

//     article.append(title, img, para);
//     document.querySelector('main').append(article);
// }