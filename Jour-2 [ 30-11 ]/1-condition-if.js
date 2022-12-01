
/*

if (condition) {
    // instructions à exécuter si condition true
}

else if (autre condition) {
    // instructions à exécuter si condition true
}

else if (autre condition) {
    // instructions à exécuter si condition true
}

else {
    // instructions à exécuter si toutes les conditions précédentes sont false 
}

IL NE PEUT Y AVOIR QU'UNE SEULE INSTRUCTION D'EXCECUTEE

*/


/*

let temp;

- de 0
entre 0 et 9
entre 10 et 24
entre 25 et 35
+ de 35

*/

let temp = 50;
let message;

// VERSION 1

// if (temp < 0) {
//     message ='il fait très froid';
// }
// else if (temp >= 0 && temp < 10 ) {
//     message = 'il fait un peu froid';
// }
// else if (temp >= 10 && temp < 25) {
//     message = 'il fait plutôt bon';
// }
// else if (temp >= 25 && temp <= 35) {
//     message = 'il fait bon';
// }
// // else if (temp > 35) {
// //     message = 'il fait très chaud');
// // }
// else {
//     message = 'il fait très chaud';
// }

console.log(message);


// VERSION 2

if (temp < 0) {
    message ='il fait très froid';
}
else if (temp < 10) {
    message = 'il fait un peu froid';
}
else if (temp < 25) {
    message = 'il fait plutôt bon';
}
else if (temp <= 35) {
    message = 'il fait bon';
}
// else if (temp > 35) {
//     message = 'il fait très chaud');
// }
else {
    message = 'il fait très chaud';
}

console.log(message);
