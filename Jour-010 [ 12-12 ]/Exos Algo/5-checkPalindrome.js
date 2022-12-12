/*
Créer une fonction qui prend un mot en paramètre.
- La fonction doit vérifier si ce mot est ou non un palindrome
(mot qui peut être lu dans les deux sens. Exemple : kayak)
- La fonction renvoie un booléen (true si c'est un palindrome, false si ce n'est pas un
palindrome)
*/

// VERSION 1 //

function check_palindrome(word){
    
    // compare la 1ère lettre et la dernière
    // puis la 2ème et l'avant-dernière...length
    // jusqu'à la moitié du mot (la 2ème moitié a déja été comparée à la 1ère moitié)
    for(let i = 0; i < word.length/2; i++){
        if (word[i] !== word[word.length - i - 1] ) return false;
    }
    return true;
}


// VERSION 2 //

function palindrome(string) {
    let left = 0;
    let right = string.length - 1;
  
    while (left <= right) {
      if (string[left] !== string[right]) return false;
      left++;
      right--;
    }
  
  return true;
}


// VERSION 3 //

function isPalindrome(word){
    
    let arr = [];

    for (const letter of word) {
        arr.unshift(letter);
        // on ajoute la lettre au début du tableau (juste avant la dernière lettre ajoutée)
    }

    return arr.join('') === word;
}