/*

- Créer une fonction qui prend 2 paramètres : un mot et une lettre à trouver dans le mot
- Si la lettre est présente, la fonction renvoie l’index de la lettre dans le mot
    (seulement la 1ère lettre trouvée si la lettre est présente plusieurs fois)
- Si la lettre n’est pas présente, la fonctionne renvoie -1
- Ne pas utiliser de fonction native comme indexOf ()...

*/

function findIndex(word, letter) {

    // faire une boucle pour parcourir le mot donné en paramètre
    for (let i=0; i < word.length; i++) {

        // comparer chaque lettre du mot à la lettre passée en paramètre 
        if (word[i] === letter) {
            // si la lettre est trouvée, renvoyer son index 
            // return met fin à la fonction
            return i;
        }

        // comparer chaque lettre du mot à la dernière lettre du mot
        else if (word[i] === word[word.length-1]) {
            return -1;
        }
    } 
  
  // OU TOUT SIMPLEMENT return -1 juste après la boucle 
  
}


// findIndex('maison', 'i');
// findIndex('immeuble', 'm');
findIndex('maison', 'z');






