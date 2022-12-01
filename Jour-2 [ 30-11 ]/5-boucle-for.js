

for (let i=0; i<=10; i++) {
    console.log(i);
}

let fruits = ['🥝', '🥥', '🍇', '🍊', '🍈', '🍌'];

// l'instruction continue permet de passer directement à l'itération suivante dès qu'une condition est remplie
// en ignorant les instructions qui se trouvent en dessous

// for (let i=0; i<fruits.length; i++) {

//     if (fruits[i] === '🍉') {
//         continue;
//     }
//     console.log(fruits[i]);
// }



// l'instruction break permet d'arrêter la boucle dès qu'une condition est remplie

// VERSION 1

// let msg = 'not found';

// for (let i=0; i<fruits.length; i++) {
    
//     if (fruits[i] === '🍉') {
//         msg = fruits[i];
//         break;
//     }
// }

// console.log(msg);


// VERSION 2

// let found = false;

// for (let i=0; i<fruits.length; i++) {
    
//     if (fruits[i] === '🍉') {
//         console.log(fruits[i]);
//         found = true;
//         break;
//     }
// }

// if (!found) console.log('not found');


// VERSION 3 

// for (let i=0; i<fruits.length; i++) {
    
//     if (fruits[i] === '🍉') {
//         console.log(fruits[i]);
//         break;
//     }
//     if (i === fruits.length-1) {
//         console.log('not found');
//     }
// }


// VERSION 4

let count = 0;

for (let i=0; i<fruits.length; i++) {
    
    if (fruits[i] === '🍉') {
        console.log(fruits[i]);
        break;
    }
    count++;
}

if (count === fruits.length) {
    console.log('not found');
}



//   boucle for of

for (let fruit of fruits) {
    console.log(fruit);
}

