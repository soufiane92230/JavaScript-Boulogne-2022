/*
- Ecrire une fonction qui prend une phrase en paramètre
- Cette fonction retourne un message indiquant le mot le plus long de la phrase, ainsi que son nombre de lettres
*/


function findLongestWord(sentence) {
    
    let words = sentence.split(' ');
    let biggestWord = '';

    for (const word of words) {
        if (word.length > biggestWord.length) {
            biggestWord = word;
        }
    }
    return `longest word is ${biggestWord} with ${biggestWord.length} letters`;
}

findLongestWord('Ceci est une phrase lambda avec le mot congolexicomatisation');