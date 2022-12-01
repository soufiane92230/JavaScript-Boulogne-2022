

//  ES6 : ... rest parameter  //

// permet de récupérer un tableau qui continent tous les arguments passés à une fonction

function getParameters(...args) {
    console.log(args);
}

getParameters(1,2, 'str', true);  // --> [1, 2, 'str', true]



//  ES6 : ... spread operator  //

// permet de déverser le contenu d'un tableau dans un autre tableau

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let fullArray = [ ...arr1, ...arr2, ...arr3];  // -->  [1, 2, 3, 4, 5, 6, 7, 8, 9]
