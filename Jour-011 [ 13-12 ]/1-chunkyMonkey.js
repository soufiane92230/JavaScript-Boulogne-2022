/*

- Créer une fonction qui prend 2 paramètres : un tableau (de strings ou numbers) et un
nombre
- La fonction doit renvoyer un tableau dans lequel toutes les valeurs du tableau initial
sont réparties dans des tableaux dont la longueur est celle indiquée en deuxième
paramètre
- chunkThis( [1, 2, 3, 4, 5, 6, 7], 2 ) doit retourner [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

*/


function chunkThis(arr, size) {
    let newArray = [];

    for (let i=0; i<arr.length;) {
        // à chaqaue tour de boucle le tableau a {size} éléments en moins au début du tableau
        // --> ce n'est plus la même valeur qui est à l'index 0
        newArray.push(arr.splice(i, size))
    }

    return newArray;
}


function ChunkyMonkey(tab, num){
    let reponse = [] ;
    let part = []
    for(let i = 0 ; i < tab.length ; i++){
        part.push(tab[i])
        if(!((i+1)%num)){
            reponse.push(part) ;
            part = []
        }
    }
    if(part.length){
        reponse.push(part) ;
    }
    return reponse ;
}


function chuncky_monkey(array, ind) {
    let new_array = [];
    for(let i = 0; i < (array.length - (array.length % ind)); i += ind){
        let temp_array = [];
        for(let j = 0; j < ind; j++){
                temp_array.push(array[i+j]);
        }
        new_array.push(temp_array);
    }
    let temp_array = [];
    for(let i = (array.length - (array.length % ind)); i < (array.length); i++){
        temp_array.push(array[i]);
    }
    new_array.push(temp_array);
    return new_array
}

