
/*
Créer une fonction qui prend 3 nombres en paramètres
et qui renvoie le plus grand

Créer une fonction qui prend des nombres en paramètres
et qui renvoie le plus grand
*/


// ... VERSION 1 ... //

function getMax(nb1, nb2, nb3) {

    if (nb1 > nb2 && nb1 > nb3) {
        return nb1;
    }
    else if (nb2 > nb3 && nb2 > nb1) {
        return nb2;
    }   

    return nb3;
}


// ... VERSION 2 ... //

function getMax(nb1, nb2, nb3) {

    if (nb1 > nb2 && nb1 > nb3) {
        return nb1;
    }
    if (nb2 > nb3) {
        return nb2;
    }   
    return nb3;
}


// ... VERSION 3 ... // 

function getMax(nb1, nb2, nb3) {

    let max;

    // on stocke dans max le plus grand entre nb1 et nb2
    if (nb1 > nb2) {
        max = nb1;  
    }
    else {
        max = nb2;
    }

    // on compare nb3 à max(qui contient le plus grand entre nb1 et nb2)
    if (nb3 > max) {
        max = nb3;   
        // si nb3 est plus grand que max, il est donc plus grand que nb1 et nb2 
    }

    return max;
}


// ... VERSION 4 ... //

function getMax(nb1, nb2, nb3) {

    let max = nb1;

    if (nb2 > max) {
        max = nb2;  
    }

    if (nb3 > max) {
        max = nb3;   
    }

    return max;
}


// ... VERSION FINALE ... //

function getMaxxx(...numbs) {

    let max = numbs[0];

    for (let numb of numbs){
        if (numb > max) {
            max = numb;
        }
    }

    return max;
}
